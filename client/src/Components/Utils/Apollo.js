// Apollo Client Component alllowing connection to server API
import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { TWITTER_CLONE_TOKEN } from '../../config'

const token = localStorage.getItem(TWITTER_CLONE_TOKEN)

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URL,
  headers: token && {
    ['x-token']: token
  }
})

export default function Apollo({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
