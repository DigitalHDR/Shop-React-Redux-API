import React from 'react'
import './navbar.css'
import { Container, Header, Titulo, NavUl, NavLi, NavA } from './styles'

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
          <NavUl>
            <NavLi><NavA href='#'><SiH className='Si' />Home</NavA></NavLi>
            <NavLi><NavA href='#'><SiC className='Si' />Sobre</NavA></NavLi>
            <NavLi><NavA href='#'><SiO className='Si' />Contato</NavA></NavLi>
            <NavLi ><NavA href='#'><BiLo className='Si' />Logar</NavA></NavLi>
            <NavLi ><NavA href='#'><FaRe className='Si' />Registrar</NavA></NavLi>
            <NavLi ><NavA href='#'><AiOu className='Si' /></NavA></NavLi>
          </NavUl>
        </Header>
      </Container>
    </div>
  )
}
