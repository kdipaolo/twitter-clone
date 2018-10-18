import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    me: User
  }

  type User {
    username: String!
    tweets: [Tweet]!
  }
`
