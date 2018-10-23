// Home Layout Container
import React, { Component } from 'react'

import Tweet from '../Elements/Tweet'
import styled from 'styled-components'
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

export default class Feed extends Component {
  render() {
    const { tweets } = this.props
    return (
      <Container>
        {tweets.length ? (
          tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
        ) : (
          <NoContent>You're not following anyone :)</NoContent>
        )}
      </Container>
    )
  }
}
