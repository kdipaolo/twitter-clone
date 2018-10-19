import React, { Component, Fragment } from 'react'
import Routes from './Components/Routes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  blue: '#35A1F2 ',
  white: '#FFFFFF',
  darkGray: '#65757E',
  lightGray: '#E6ECF0',
  maxWidth: '1200px'
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    background: ${theme.lightGray}
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.darkGray};
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Routes />
        </>
      </ThemeProvider>
    )
  }
}

export default App
