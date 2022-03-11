import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 7%;
  background-color: #f0f8ff10;
  box-shadow: 0px 10px 27px -12px #50d603;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Titulo = styled.h3`
  font-size: x-large;
  font-weight: bold;
`
export const Nav = styled.div`

`
export const MenuLink = styled.a`
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 10px;
  transition: all ease-in-out .3s;
  &:hover  {
    background-color: #f0f8ff1c;
  }
`
