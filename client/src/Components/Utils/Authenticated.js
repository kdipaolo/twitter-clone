import React, { Component } from 'react'
import Login from '../Layout/Login'
import User from './User'

export default class Authenticated extends Component {
  render() {
    return (
      <User>
        {({ me: currentUser, loading }) =>
          !loading && currentUser && currentUser.email ? (
            this.props.children(currentUser)
          ) : (
            <Login />
          )
        }
      </User>
    )
  }
}
