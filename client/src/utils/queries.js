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

export const ME = gql`
  {
    me {
      username
      name
      email
    }
  }
`

export const SIGN_UP = gql`
  mutation signUp(
    $username: String!
    $email: String!
    $password: String!
    $name: String!
  ) {
    signUp(
      username: $username
      email: $email
      password: $password
      name: $name
    ) {
      token
    }
  }
`
