// Apollo Client Component alllowing connection to server API
import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URL
})

export default function Apollo({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
