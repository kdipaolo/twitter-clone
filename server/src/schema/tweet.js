import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    tweet(id: ID!): Tweet
    tweets: [Tweet]!
  }

  extend type Mutation {
    createTweet(userId: ID!, message: String!, createdAt: String!): Tweet
  }

  type Tweet {
    message: String!
    user: User
  }
`
