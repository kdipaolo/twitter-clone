import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UserThumbnail from './UserThumbnail'

const Container = styled.div`
  padding: 0 10px;
`

export default class Tweet extends Component {
  render() {
    return (
      <Container>
        <UserThumbnail noFollow>{this.props.message}</UserThumbnail>
      </Container>
    )
  }
}

Tweet.propTypes = {
  message: PropTypes.string.isRequired
}
