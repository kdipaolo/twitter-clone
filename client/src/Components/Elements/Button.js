// Button Component
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.button`
  /* Primary Button Styles */
  background: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  padding: 6px;
  min-width: 75px;
  font-weight: bold;
  font-size: 1.25rem;
  border-radius: 20px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  /* Hollow Button Styles */
  ${props =>
    props.hollow &&
    css`
      border: 1px solid ${props => props.theme.blue};
      color: ${props => props.theme.blue};
      background: transparent;
    `};
  /* Disabled Button Styles */
  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
    `};
`

export default class Button extends Component {
  render() {
    return <Container {...this.props}>{this.props.children}</Container>
  }
}
