import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'

import Button from './Button'
import { FOLLOW } from '../../utils/queries'

export default class FollowButton extends Component {
  render() {
    const refetchQueries = ['whoToFollow', 'feed', 'me', 'following']
    const { userId } = this.props
    return (
      <Mutation mutation={FOLLOW} refetchQueries={refetchQueries}>
        {follow => (
          <div>
            <Button
              hollow
              onClick={() =>
                follow({
                  variables: {
                    userId
                  }
                })
              }
            >
              Follow
            </Button>
          </div>
        )}
      </Mutation>
    )
  }
}

FollowButton.propTypes = {
  userId: PropTypes.string.isRequired
}
