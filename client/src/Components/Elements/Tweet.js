import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UserThumbnail from './UserThumbnail'

const Container = styled.div`
  padding: 0 ${props => props.theme.space};
`

export default class Tweet extends Component {
  render() {
    const { message, user } = this.props.tweet
    return (
      <Container>
        <UserThumbnail user={user}>
          <p>{message}</p>
        </UserThumbnail>
      </Container>
    )
  }
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
