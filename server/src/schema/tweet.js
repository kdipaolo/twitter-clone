// Tweet Schema
import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    tweet(id: ID!): Tweet
    tweets: [Tweet]!
    feed: [Tweet]!
  }

  extend type Mutation {
    createTweet(message: String!): Tweet
  }

  type Tweet {
    id: ID!
    message: String!
    user: User
  }
`
