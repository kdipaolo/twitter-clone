// Home Layout Container
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import Tweet from '../Elements/Tweet'
import styled from 'styled-components'
import NewTweet from '../Elements/NewTweet'
import { FEED } from '../../utils/queries'
import NoContent from '../Elements/NoContent'

const Container = styled.div`
  min-height: 150px;
  > div {
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  > div:first-of-type {
    border-top: none;
  }
`

export default class Home extends Component {
  render() {
    return (
      <Query query={FEED}>
        {({ data: { feed }, loading }) =>
          !loading && (
            <Container>
              <NewTweet />
              {feed.length ? (
                feed.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
              ) : (
                <NoContent>You're not following anyone :)</NoContent>
              )}
            </Container>
          )
        }
      </Query>
    )
  }
}
