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
  query me {
    me {
      username
      name
      email
      following
      tweets {
        id
      }
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

export const SIGN_IN = gql`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`

export const CREATE_TWEET = gql`
  mutation createTweet($message: String!) {
    createTweet(message: $message) {
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
