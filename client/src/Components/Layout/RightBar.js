// Who to follow Right Bar Component
import React, { Component } from 'react'
import Card from '../Elements/Card'
import UserThumbnail from '../Elements/UserThumbnail'
import { Query } from 'react-apollo'
import { WHO_TO_FOLLOW } from '../../utils/queries'
import NoContent from '../Elements/NoContent'
import FollowButton from '../Elements/FollowButton'

export default class RightBar extends Component {
  render() {
    return (
      <div>
        <Query query={WHO_TO_FOLLOW}>
          {({ data: { whoToFollow }, loading }) =>
            !loading && (
              <Card>
                <h3>Who to follow</h3>
                {whoToFollow.length ? (
                  whoToFollow.map(user => (
                    <UserThumbnail key={user.id} user={user}>
                      <FollowButton userId={user.id} />
                    </UserThumbnail>
                  ))
                ) : (
                  <NoContent>You are following everyone :)</NoContent>
                )}
              </Card>
            )
          }
        </Query>
      </div>
    )
  }
}
