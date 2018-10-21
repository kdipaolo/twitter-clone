// Home Layout Container
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import Tweet from '../Elements/Tweet'
import styled from 'styled-components'
import NewTweet from '../Elements/NewTweet'
import { FEED } from '../../utils/queries'

const Container = styled.div`
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
              {feed.map(tweet => (
                <Tweet key={tweet.id} tweet={tweet} />
              ))}
            </Container>
          )
        }
      </Query>
    )
  }
}
