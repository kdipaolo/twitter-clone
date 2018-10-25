import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { FOLLOWERS } from '../utils/queries'
import Following from '../Components/Layout/Following'

export default class FollowersContainer extends Component {
  render() {
    return (
      <div>
        <Query query={FOLLOWERS}>
          {({ loading, data: { following } }) =>
            !loading && <Following users={following} />
          }
        </Query>
      </div>
    )
  }
}
