// User Thumbnail Component
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button'
import ProfilePicture from './ProfilePicture'
import { Mutation } from 'react-apollo'
import { FOLLOW } from '../../utils/queries'
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
    const { username, name, id } = this.props.user
    const { noFollow, children } = this.props
    return (
      <Mutation
        mutation={FOLLOW}
        refetchQueries={['whoToFollow', 'feed', 'me']}
      >
        {follow => (
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
              {!noFollow && (
                <Button
                  hollow
                  onClick={() =>
                    follow({
                      variables: {
                        userId: id
                      }
                    })
                  }
                >
                  Follow
                </Button>
              )}
              <P>{children}</P>
            </div>
          </Container>
        )}
      </Mutation>
    )
  }
}

UserThumbnail.propTypes = {
  noFollow: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
}
