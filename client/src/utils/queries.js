import gql from 'graphql-tag'

export const USERS_TWEETS = gql`
  query getTweets($userId: ID!) {
    tweets(userId: $userId) {
      message
      id
      user {
        id
        username
        name
      }
    }
  }
`

export const FEED = gql`
  query feed {
    feed {
      message
      id
      user {
        id
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
      following
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

export const FOLLOW = gql`
  mutation($userId: ID!) {
    follow(userId: $userId) {
      id
    }
  }
`

export const WHO_TO_FOLLOW = gql`
  query whoToFollow {
    whoToFollow {
      id
      name
      username
    }
  }
`

export const GET_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      id
      name
      username
    }
  }
`
