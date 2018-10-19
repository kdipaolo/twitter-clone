import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

const P = styled.p`
  color: ${props => props.theme.black};
  font-size: 1.35rem;
  line-height: 1.5;
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
          {!this.props.noFollow && <Button hollow>Follow</Button>}
          <P>{this.props.children}</P>
        </div>
      </Container>
    )
  }
}

UserThumbnail.propTypes = {
  noFollow: PropTypes.bool
}
