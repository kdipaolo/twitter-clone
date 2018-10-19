// Place any global styles here
import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    background: ${theme.lightGray};
    font-family: 'Helvetica';
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
  h3,
  p {
    margin: 0;
  }
`
export default GlobalStyle
