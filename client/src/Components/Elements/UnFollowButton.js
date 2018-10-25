import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'

import Button from './Button'
import { UNFOLLOW } from '../../utils/queries'

export default class UnFollowButton extends Component {
  render() {
    const refetchQueries = ['whoToFollow', 'feed', 'me', 'following']
    const { userId } = this.props
    return (
      <Mutation mutation={UNFOLLOW} refetchQueries={refetchQueries}>
        {unfollow => (
          <div>
            <Button
              hollow
              onClick={() =>
                unfollow({
                  variables: {
                    userId
                  }
                })
              }
            >
              Unfollow
            </Button>
          </div>
        )}
      </Mutation>
    )
  }
}

UnFollowButton.propTypes = {
  userId: PropTypes.string.isRequired
}
