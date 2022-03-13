//src/componensts/navbar/index.jsx
import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import { Container, Header, Titulo, NavUl, NavLi, NavA } from './styles'
import { TitutoGlobal } from '../../styles/GlobalStyles'
import { useSelector } from 'react-redux'

import { SiHomeadvisor as SiH, SiCountingworkspro as SiC, SiOpsgenie as SiO } from "react-icons/si";
import { AiOutlineShoppingCart as AiOu } from "react-icons/ai"
import { BiLogInCircle as BiLo } from "react-icons/bi"
import { FaRegIdBadge as FaRe } from "react-icons/fa"

export default function Navbar() {
  const state = useSelector((state) => state.handleCart)

  return (
    <div>
      <Container>
        <Header>
          <TitutoGlobal>REACT REDUX API</TitutoGlobal>
          <NavUl>
            <NavLi>
              <NavA href='#'><SiH className='Si' /><Link to="/">Home</Link></NavA>
            </NavLi>
            <NavLi>
              <NavA href='#'><SiC className='Si' /><Link to="/produtos">Produtos</Link></NavA>
            </NavLi>
            <NavLi>
              <NavA href='#'><SiO className='Si' />Contato</NavA>
            </NavLi>
            <NavLi>
              <NavA href='#'><BiLo className='Si' />Logar</NavA>
            </NavLi>
            <NavLi>
              <NavA href='#'><FaRe className='Si' />Registrar</NavA>
            </NavLi>
            <NavLi>
              <Link to="/carrinho"><NavA href='#'><AiOu className='Si' />({state.length})</NavA></Link>
            </NavLi>
          </NavUl>
        </Header>
      </Container>
    </div>
  )
}
