// User Profile Info Left Bar Component
import React, { Component } from 'react'
import Card from '../Elements/Card'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerPicture = styled.div`
  background: ${props => props.theme.blue};
  height: 100px;
  width: 100%;
`

const Info = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  li {
    list-style: none;
    color: ${props => props.theme.darkGray};
    span {
      display: block;
      color: ${props => props.theme.blue};
      font-weight: bold;
      font-size: 2rem;
    }
  }
`

const UserInfo = styled.div`
  padding: ${props => props.theme.space};
  p {
    color: ${props => props.theme.darkGray};
  }
`

export default class LeftBar extends Component {
  render() {
    const { name, username, following } = this.props.user

    return (
      <Card noPad>
        <BannerPicture />
        <UserInfo>
          <h3>{name}</h3>
          <p>@{username}</p>
          <Info>
            <li>
              Tweets
              <span>135</span>
            </li>
            <li>
              Following
              <span>{following.length}</span>
            </li>
            <li>
              Followers
              <span>17</span>
            </li>
          </Info>
        </UserInfo>
      </Card>
    )
  }
}

LeftBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
}
