import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background: #F6F6F6;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-weight: 700;
    text-decoration: none;
    list-style: none;
  }
`

export default GlobalStyle;