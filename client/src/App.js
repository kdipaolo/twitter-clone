import React, { Component } from 'react'
import Routes from './Components/Routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Apollo from './Components/Utils/Apollo'

class App extends Component {
  render() {
    return (
      <Apollo>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Routes />
          </>
        </ThemeProvider>
      </Apollo>
    )
  }
}

export default App
