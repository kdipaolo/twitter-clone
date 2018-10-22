// Different User view Component
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { USERS_TWEETS, GET_USER } from '../../utils/queries'
import Tweet from '../Elements/Tweet'
import UserThumbnail from '../Elements/UserThumbnail'

export default class UserProfile extends Component {
  render() {
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
                      <UserThumbnail noFollow user={data.user} />
                      <hr />
                      <h4>{data.user.name} Tweets:</h4>
                      {tweets.map(tweet => (
                        <Tweet tweet={tweet} />
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
