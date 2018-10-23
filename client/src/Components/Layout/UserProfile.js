// Different User view Component
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { USERS_TWEETS, GET_USER } from '../../utils/queries'
import Tweet from '../Elements/Tweet'
import styled from 'styled-components'

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
                      <TweetsTitle>
                        {data.user.name}{' '}
                        <span>
                          (@
                          {data.user.username})
                        </span>{' '}
                        Tweets
                      </TweetsTitle>
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
