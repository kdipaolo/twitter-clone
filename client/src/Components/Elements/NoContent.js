import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
  background: ${props => props.theme.lightGray};
  text-align: center;
  color: ${props => props.theme.black};
  padding: ${props => props.theme.space};
  margin: ${props => props.theme.space};
`

export default function NoContent({ children }) {
  return <Title>{children}</Title>
}
