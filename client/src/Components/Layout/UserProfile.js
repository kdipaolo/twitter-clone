// Different User view Component
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { USERS_TWEETS, GET_USER } from '../../utils/queries'
import Tweet from '../Elements/Tweet'
import styled from 'styled-components'
import FollowButton from '../Elements/FollowButton'
import UnFollowButton from '../Elements/UnFollowButton'

const TweetsTitle = styled.h4`
  text-align: center;
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
  padding: ${props => props.theme.space};
  margin: 0;
  span {
    color: ${props => props.theme.darkGray};
  }
`

class UserProfile extends Component {
  render() {
    const notOnOwnUserProfile =
      this.props.currentUser.username !== this.props.match.params.username
    const { following } = this.props.currentUser
    const isFollowing = userId => following.includes(userId)
    return (
      <div>
        <Query
          query={GET_USER}
          variables={{ username: this.props.match.params.username }}
        >
          {({ data, loading }) =>
            !loading && (
              <Query query={USERS_TWEETS} variables={{ userId: data.user.id }}>
                {({ data: { tweets }, loading }) =>
                  !loading && (
                    <>
                      <TweetsTitle>
                        {data.user.name}{' '}
                        <span>
                          (@
                          {data.user.username})
                        </span>{' '}
                        Tweets
                      </TweetsTitle>
                      {notOnOwnUserProfile && (
                        <div>
                          {isFollowing(data.user.id) ? (
                            <UnFollowButton userId={data.user.id} />
                          ) : (
                            <FollowButton userId={data.user.id} />
                          )}
                        </div>
                      )}

                      {tweets.map(tweet => (
                        <Tweet key={tweet.id} tweet={tweet} />
                      ))}
                    </>
                  )
                }
              </Query>
            )
          }
        </Query>
      </div>
    )
  }
}

export default withRouter(UserProfile)
