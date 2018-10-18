import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    tweet: Tweet
  }

  type Tweet {
    message: String!
  }
`
