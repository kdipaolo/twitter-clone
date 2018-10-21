// Header Component
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../images/logo.svg'
import Button from '../Elements/Button'
import { links } from '../../content'
import { TWITTER_CLONE_TOKEN } from '../../config'

const Wrapper = styled.div`
  background: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.lightGray};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
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
    padding: ${props => props.theme.space};
    svg {
      margin-right: 5px;
    }
    &.active {
      color: ${props => props.theme.blue};
      border-bottom: 2px solid ${props => props.theme.blue};
    }
  }
`

const Actions = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

export default class Header extends Component {
  logout = () => {
    localStorage.removeItem(TWITTER_CLONE_TOKEN)
    window.location.reload()
  }
  render() {
    return (
      <Wrapper>
        <Container>
          {/* Twitter Links */}
          <Links>
            {links.map((link, i) => {
              const Icon = link.icon
              return (
                <NavLink to={link.to} key={i}>
                  <Icon size={22} /> {link.name}
                </NavLink>
              )
            })}
          </Links>
          {/* Twitter Logo */}
          <img src={logo} width="50" alt="Logo" />
          {/* Tweet Button */}
          <Actions>
            <Button>Tweet</Button>
            <Button hollow onClick={this.logout}>
              Log Out
            </Button>
          </Actions>
        </Container>
      </Wrapper>
    )
  }
}
