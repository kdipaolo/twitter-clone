// User Schema
import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    me: User
    whoToFollow: [User]!
  }

  extend type Mutation {
    signUp(
      username: String!
      email: String!
      password: String!
      name: String!
    ): Token!
    signIn(login: String!, password: String!): Token!
    follow(userId: ID!): User!
  }

  type User {
    id: ID
    username: String
    name: String
    email: String
    tweets: [Tweet]
    following: [String]
  }

  type Token {
    token: String!
  }
`
