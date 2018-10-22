import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { ME } from '../../utils/queries'

export default class User extends Component {
  render() {
    return (
      <Query query={ME}>
        {({ loading, data: user }) =>
          !loading && this.props.children(user && user.me)
        }
      </Query>
    )
  }
}
