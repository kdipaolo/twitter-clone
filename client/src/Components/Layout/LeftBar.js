// User Profile Info Left Bar Component
import React, { Component } from 'react'
import Card from '../Elements/Card'
import styled from 'styled-components'

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
    return (
      <Card noPad>
        <BannerPicture />
        <UserInfo>
          <h3>Kurt DiPaolo</h3>
          <p>@KurtDiPaolo</p>
          <Info>
            <li>
              Tweets
              <span>135</span>
            </li>
            <li>
              Following
              <span>13</span>
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
