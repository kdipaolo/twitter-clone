import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Bell, Zap, Mail } from 'react-feather'
import styled from 'styled-components'
import logo from '../../images/logo.svg'
import Button from '../Elements/Button'

const Wrapper = styled.div`
  background: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.lightGray};
  position: fixed;
  width: 100%;
  top: 0;
`

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  div:last-of-type {
    display: grid;
    justify-items: right;
  }
`

const Links = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding: 10px;
    svg {
      margin-right: 5px;
    }
    &.active {
      color: ${props => props.theme.blue};
      border-bottom: 2px solid ${props => props.theme.blue};
    }
  }
`

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Links>
            <NavLink to="/">
              <Home size={22} /> Home
            </NavLink>
            <NavLink to="/moments">
              <Zap size={22} />
              Moments
            </NavLink>
            <NavLink to="/notifications">
              <Bell size={22} />
              Notifications
            </NavLink>
            <NavLink to="/messages">
              <Mail size={22} />
              Messages
            </NavLink>
          </Links>
          <img src={logo} width="50" />
          <div>
            <Button>Tweet</Button>
          </div>
        </Container>
      </Wrapper>
    )
  }
}
