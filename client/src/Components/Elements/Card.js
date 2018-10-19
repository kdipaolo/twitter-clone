import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 2px;
  background: ${props => props.theme.white};
  padding: 10px;
`

export default class Card extends Component {
  render() {
    return <Container {...this.props}>{this.props.children}</Container>
  }
}
