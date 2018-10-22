import React, { Component } from 'react'
import Login from '../Layout/Login'
import { ME } from '../../utils/queries'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import logo from '../../images/logo.svg'
import { TWITTER_CLONE_TOKEN } from '../../config'

const Overlay = styled.div`
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Logo = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LoadingOverlay = () => (
  <Overlay>
    <Logo src={logo} width="100" />
  </Overlay>
)

export default class Authenticated extends Component {
  render() {
    return (
      <Query query={ME}>
        {({ loading, data: user, error }) => {
          if (loading) {
            return <LoadingOverlay />
          }
          if (error) {
            localStorage.removeItem(TWITTER_CLONE_TOKEN)
          }

          return user && user.me && user.me.email ? (
            this.props.children(user && user.me)
          ) : (
            <Login />
          )
        }}
      </Query>
    )
  }
}
