// User Thumbnail Component
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button'
import ProfilePicture from './ProfilePicture'

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
        <Link to="/user/kdipaolo">
          <ProfilePicture />
        </Link>
        <div>
          <Link to="/user/kdipaolo">
            <Title>
              Kurt DiPaolo <span>@kurtdipaolo</span>
            </Title>
          </Link>
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
