// Who to follow Right Bar Component
import React, { Component } from 'react'
import Card from '../Elements/Card'
import UserThumbnail from '../Elements/UserThumbnail'
import { Query } from 'react-apollo'
import { WHO_TO_FOLLOW } from '../../utils/queries'

export default class RightBar extends Component {
  render() {
    return (
      <Query query={WHO_TO_FOLLOW}>
        {({ data: { whoToFollow }, loading }) =>
          !loading && (
            <Card>
              <h3>Who to follow</h3>
              {whoToFollow.length ? (
                whoToFollow.map(user => <UserThumbnail user={user} />)
              ) : (
                <p>You are following everyone :)</p>
              )}
            </Card>
          )
        }
      </Query>
    )
  }
}
