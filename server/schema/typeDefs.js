const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    # posts: [Post]!
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }
  type Category {
    _id: ID
    name: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    profile(_id: ID!): Profile
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addProfile(firstName: String!,lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): Profile
    updateProduct(_id: ID!, quantity: Int!): Product
  
  }
`;

module.exports = typeDefs;
