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
    ${'' /* background-color: #dcdcdc; */}
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #fff;
  }
`


export const ContainerGlobal = styled.section`
  padding: 0px 7%;
`
export const PaddingTopGlobal = styled.div`
  padding: 40px 0;
`
export const FlexGlobal = styled.div`
  display: flex;
  justify-content: center;
`
export const TitutoGlobal = styled.h1`
  font-size: xx-large;
  text-align: center;
  color: #fff;
`
export const BtnGlobal = styled.button`
  border: 1px solid #50d603;
  color: #000;
  padding: 5px 10px;
  margin: 15px 5px;
  background: #50d603;
  transition: all ease-in-out .3s;
  font-size: larger;
  align-self: center;
    border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
`

//! btn da pagina de carrinho styled a mais.
export const BotaoCardGlobal = styled.button`
  border: 1px solid #50d603;
  font-size: medium;
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  color: #000;
  margin: 15px 5px 10px 0px;
  background: #50d603;
  align-self: center;
  transition: all ease-in-out .3s;
  &:hover {
    background: #fff;
  }
`
