import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.username}</h1>
      </div>
    )
  }
}
