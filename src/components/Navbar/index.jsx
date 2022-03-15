//src/componensts/navbar/index.jsx
import React, { useState } from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import { Container, Header, NavUl, NavLi, NavA, MenuHamburguer, CarrinhoMenu } from './styles'
import { TitutoGlobal } from '../../styles/GlobalStyles'
import { useSelector } from 'react-redux'

import { SiHomeadvisor as SiH, SiCountingworkspro as SiC, SiOpsgenie as SiO } from "react-icons/si";
import { AiOutlineShoppingCart as AiOu, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BiLogInCircle as BiLo } from "react-icons/bi"
import { FaRegIdBadge as FaRe } from "react-icons/fa"

export default function Navbar() {
  const state = useSelector((state) => state.handleCart)

  const [menu, setMenu] = useState(false)

  return (
    <div>
      <Container>
        <Header>
          <TitutoGlobal>REACT REDUX API</TitutoGlobal>

          <NavUl id={menu ? 'MostrarMenu' : ''}>
            <NavLi onClick={() => setMenu(!menu)}>
              <NavA href='#'><SiH className='Si' /><Link to="/">Home</Link></NavA>
            </NavLi>
            <NavLi onClick={() => setMenu(!menu)}>
              <NavA href='#'><SiC className='Si' /><Link to="/produtos">Produtos</Link></NavA>
            </NavLi>
            <NavLi onClick={() => setMenu(!menu)}>
              <NavA href='#'><SiO className='Si' />Contato</NavA>
            </NavLi>
            <NavLi onClick={() => setMenu(!menu)}>
              <NavA href='#'><BiLo className='Si' />Logar</NavA>
            </NavLi>
            <NavLi onClick={() => setMenu(!menu)}>
              <NavA href='#'><FaRe className='Si' />Registrar</NavA>
            </NavLi>
            <NavLi onClick={() => setMenu(!menu)}>
              <Link to="/carrinho"><NavA href='#'><AiOu className='Si' />({state.length})</NavA></Link>
            </NavLi>
          </NavUl>

          <MenuHamburguer onClick={() => setMenu(!menu)}>
            {menu ?
              <AiOutlineClose color='#fff' fontSize={30} /> :
              <AiOutlineMenu color='#fff' fontSize={30} />}
          </MenuHamburguer>

          <CarrinhoMenu style={{ color: '#fff', marginLeft: 5 }}>
            <Link to="/carrinho">
              <AiOu className='Si' />
              {state.length}
            </Link>
          </CarrinhoMenu>
          
        </Header>
      </Container>
    </div>
  )
}

{/* LINHA 46 (DIFERENTE DE MENU FALSE É MENU VERDADEIRO,)
              LINHA 25 (ENTÃO 'MOSTRARMENU')
              ISSO FAZ O MENU APARECER
    LINHA 17 MENU COMEÇA COM FALSE */}