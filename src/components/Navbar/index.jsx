import React from 'react'
import './navbar.css'
import { Container, Header, Titulo, Nav, MenuLink } from './styles'

import { SiHomeadvisor as SiH, SiCountingworkspro as SiC, SiOpsgenie as SiO } from "react-icons/si";
import { AiOutlineShoppingCart as AiOu } from "react-icons/ai"
import { BiLogInCircle as BiLo } from "react-icons/bi"
import { FaRegIdBadge as FaRe } from "react-icons/fa"

export default function Navbar() {
  return (
    <div>
      <Container>
        <Header>
          <Titulo>REACT REDUX API</Titulo>
          <Nav>
            <MenuLink href='#'><SiH className='Si' />Home</MenuLink>
            <MenuLink href='#'><SiC className='Si' />Sobre</MenuLink>
            <MenuLink href='#'><SiO className='Si' />Contato</MenuLink>
            <MenuLink href='#'><BiLo className='Si' />Logar</MenuLink>
            <MenuLink href='#'><FaRe className='Si' />Registrar</MenuLink>
            <MenuLink href='#'><AiOu className='Si' /></MenuLink>
          </Nav>
        </Header>
      </Container>
    </div>
  )
}
