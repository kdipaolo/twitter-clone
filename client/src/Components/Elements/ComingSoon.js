import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  padding: ${props => props.theme.space};
  margin: 0;
`

export default function ComingSoon() {
  return (
    <>
      <Title>Coming Soon...</Title>
    </>
  )
}
