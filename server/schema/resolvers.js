const { AuthenticationError } = require('apollo-server-express');
const { Profile, Product, Category, Order} = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    profiles: async () => {
      return Profile.find().populate('posts');
    },
    profile: async (parent, { _id }) => {
      return Profile.findOne({ _id: _id }).populate('posts');
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    order: async (parent, { _id }, context) => {
      if (context.profile) {
        const profile = await Profile.findById(context.profile._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return profile.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
      
  },
  checkout: async (parent, args, context) => {
    const url = new URL(context.headers.referer).origin;
    const order = new Order({ products: args.products });
    const line_items = [];

    const { products } = await order.populate('products');

    for (let i = 0; i < products.length; i++) {
      const product = await stripe.products.create({
        name: products[i].name,
        description: products[i].description,
        images: [`${url}/images/${products[i].image}`]
      });

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: products[i].price * 100,
        currency: 'usd',
      });

      line_items.push({
        price: price.id,
        quantity: 1
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/`
    });

    return { session: session.id };
  }
},

  Mutation: {
    addProfile: async (parent, { firstName, lastName, email, password }) => {
      const profile = await Profile.create({ firstName, lastName, email, password });
      const token = signToken(profile);
      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No user found with this username :(');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(profile);

      return { token, profile };
      
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.proifle) {
        const order = new Order({ products });

        await Profile.findByIdAndUpdate(context.profile._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.profile) {
        return await Profile.findByIdAndUpdate(context.profile._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },

  },
};

module.exports = resolvers;
