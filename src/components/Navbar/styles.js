import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 7%;
  position: fixed;
  z-index: 1000;
  width: 100%;
  background-color: #170b29;
  box-shadow: 0px 10px 27px -12px #50d603;
`
export const Header = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`
export const Titulo = styled.h3`
  font-size: x-large;
  font-weight: bold;
`
export const MenuHamburguer = styled.div`
  display: none;
  flex-grow: 1;
  justify-content: end;
  @media(max-width: 1120px) {
    display: flex;
  }
`
export const NavUl = styled.ul`
  display: flex;
      transition: all ease-in-out 0.5s;
  @media(max-width: 1120px) {
    display: none;
  }
`
export const NavLi = styled.li`
  margin-left: 10px;
`
export const NavA = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #50d603;
  transition: all ease-in-out .3s;
  &:hover {
    border: 1px solid #50d60386;
  }
`
export const CarrinhoMenu = styled.li`
  display: none;
  @media(max-width: 1120px) {
    display: flex;
  }
`