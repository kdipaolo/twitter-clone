import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FollowButton from '../Elements/FollowButton'
import UserThumbnail from '../Elements/UserThumbnail'
import styled from 'styled-components'
import UnFollowButton from '../Elements/UnFollowButton'

const Container = styled.div`
  padding: ${props => props.theme.space};
`

export default class Following extends Component {
  render() {
    const { users } = this.props
    return (
      <Container>
        {users.length
          ? users.map(user => (
              <UserThumbnail key={user.id} user={user}>
                <UnFollowButton userId={user.id} />
              </UserThumbnail>
            ))
          : 'You are not following anyone'}
      </Container>
    )
  }
}

Following.propTypes = {
  users: PropTypes.array.isRequired
}
