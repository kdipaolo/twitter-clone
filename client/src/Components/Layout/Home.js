// Home Layout Container
import React, { Component } from 'react'
import Tweet from '../Elements/Tweet'
import styled from 'styled-components'
import NewTweet from '../Elements/NewTweet'

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
      <Container>
        <NewTweet />
        <Tweet message="First Tweet" />
        <Tweet message="Hello everyone this is a long tweet to see how this looks with long form text. Hello everyone this is a long tweet to see how this looks." />
        <Tweet message="Three Tweet" />
        <Tweet message="Fourth Tweet" />
        <Tweet message="Fifith Tweet" />
        <Tweet message="Sixth Tweet" />
        <Tweet message="Sevent Tweet" />
        <Tweet message="Eight Tweet" />
        <Tweet message="Ninth Tweet" />
        <Tweet message="Tenth Tweet" />
      </Container>
    )
  }
}
