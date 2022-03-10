import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   list-style: none;
   text-decoration: none;
   outline: none;
  }

  body {
    background-color: #170b29;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`



