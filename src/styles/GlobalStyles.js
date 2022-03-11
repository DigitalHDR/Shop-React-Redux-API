import styled, { createGlobalStyle } from 'styled-components'

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

  html, a {
    color: white;
  }
`

export const ContainerGlobal = styled.section`
  padding: 0px 7%;
`
export const PaddingTopGlobal = styled.div`
  padding: 40px 0;
`
export const BtnGlobal = styled.button`
  border: 1px solid #50d603;
  padding: 5px 10px;
  margin: 15px 5px;
  background: #50d603;
  transition: all ease-in-out .3s;
  font-size: medium;
  align-self: center;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
`
export const BotaoCardGlobal = styled.button`
  border: 1px solid #50d603;
  padding: 5px 10px;
  margin: 15px 0;
  background: #50d603;
  transition: all ease-in-out .3s;
  align-self: center;
  &:hover {
      background: transparent;
  }
`
