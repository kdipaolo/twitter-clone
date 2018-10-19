import gql from 'graphql-tag'

export const GET_TWEETS = gql`
  query getTweets {
    tweets {
      message
      id
      user {
        username
        name
      }
    }
  }
`
