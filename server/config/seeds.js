const db = require('./connection');
const { Profile, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Window Screens' },
    { name: 'Scrubbers' },
    { name: 'Cleaning Supplies' },
    { name: 'Tools' },
    { name: 'Other' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Cheap Screen',
      description:
        'This is a very cheap window screen.',
      image: 'windowscreen2.png',
      category: categories[0]._id,
      price: 12.99,
      quantity: 500
    },
    {
      name: 'Expensive Screen',
      description:
        'This is a very expensive window screen.',
      image: 'windowscreen1.png',
      category: categories[0]._id,
      price: 55.99,
      quantity: 500
    },
    {
      name: 'Orange Scrubby',
      category: categories[1]._id,
      description:
        'Orange window scrubby is very orange and it is really bad at cleaning it pretty much useless',
      image: 'scrubber2.png',
      price: 233.99,
      quantity: 20
    },
    {
      name: 'Basic Scrubby ',
      category: categories[1]._id,
      description:
        'Original window scrubby it does a decent job',
      image: 'scrubber1.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Blue Scrubby',
      category: categories[1]._id,
      description:
        'This window scrubby is the color blue',
      image: 'scrubber3.png',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Lime Stuff',
      category: categories[2]._id,
      description:
        'Put a lot of this stuff on your windows and it will help remove dirt and stuff',
      image: 'cleaningsupplies.png',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Pink Gun',
      category: categories[2]._id,
      description:
        'This is a necessity for cleaning windows. Just point and shoot, and the window will become so transparent it will look like there was never one in the first place',
      image: 'pinkgun.png',
      price: 5250.99,
      quantity: 5
    },
    {
      name: 'Water System',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'watersystem.png',
      price: 785.35,
      quantity: 100
    },
    {
      name: 'Water Fed Pole',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'waterfed.png',
      price: 49.99,
      quantity: 1000
    },
    {
      name: 'Green Bucket',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'greenthing.png',
      price: 25.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 199.99,
      quantity: 100
    },
    {
      name: 'Cheap Windex',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'windexx.png',
      price: 1.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await Profile.deleteMany();

  await Profile.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await Profile.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
