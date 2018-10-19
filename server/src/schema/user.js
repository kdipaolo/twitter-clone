// User Schema
import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    me: User
  }

  extend type Mutation {
    signUp(username: String!, email: String!, password: String!): Token!
    signIn(login: String!, password: String!): Token!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    tweets: [Tweet]!
  }

  type Token {
    token: String!
  }
`
