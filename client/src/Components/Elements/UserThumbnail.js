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
    const { username, name } = this.props.user
    const { noFollow, children } = this.props
    return (
      <Container>
        <Link to={`/user/${username}`}>
          <ProfilePicture />
        </Link>
        <div>
          <Link to={`/user/${username}`}>
            <Title>
              {name} <span>@{username}</span>
            </Title>
          </Link>
          {!noFollow && <Button hollow>Follow</Button>}
          <P>{children}</P>
        </div>
      </Container>
    )
  }
}

UserThumbnail.propTypes = {
  noFollow: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
}
