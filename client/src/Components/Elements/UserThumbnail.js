import React, { Component } from 'react'
import Button from './Button'
import ProfilePicture from './ProfilePicture'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 15px 0;
`

const Title = styled.h3`
  font-weight: bold;
  font-size: 1.35rem;
  span {
    color: ${props => props.theme.darkGray};
    font-size: 1.25rem;
    font-weight: normal;
  }
`

export default class UserThumbnail extends Component {
  render() {
    return (
      <Container>
        <ProfilePicture />
        <div>
          <Title>
            Kurt DiPaolo <span>@kurtdipaolo</span>
          </Title>
          <Button hollow>Follow</Button>
        </div>
      </Container>
    )
  }
}
