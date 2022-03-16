//pages/carrinho/index.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { BotaoCardGlobal, PaddingTopGlobal, TitutoGlobal } from '../../styles/GlobalStyles'
import { CardContainer, Card, Paragrafo, Image, ImageContainer, Descricao, TituloCard } from './styles'

import { delCart } from '../../redux/action'

export default function Cart() {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delCart(item))
  }

  const cartItems = (cartItem) => {
    return (
      <div key={cartItem.id}>
        <CardContainer >
          <Card >
            <ImageContainer>
              <Image src={cartItem.image} alt={cartItem.title} />
            </ImageContainer>

            <Descricao>
              <TituloCard>{cartItem.title}</TituloCard>
              <Paragrafo>R$ {cartItem.price.toFixed(2)}</Paragrafo>
            </Descricao>

            <BotaoCardGlobal
              //!styled + porque tem em outro lugar o mesmo
              style={{
                display: 'flex',
                alignSelf: 'self-start',
                justifyContent: 'right',
                marginRight: 15
              }}
              onClick={() => handleClose(cartItem)}>
              X
            </BotaoCardGlobal>
          </Card>
        </CardContainer>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <>
        <Paragrafo
          //!styled + porque tem em outro lugar o mesmo
          style={{
            color: '#fff',
            textAlign: 'center'
          }}>
          Carrinho está vazio
        </Paragrafo>
      </>
    )
  }

  const button = () => {
    return (
      <>
        <NavLink to="/finalizacao">
          <BotaoCardGlobal>
            Fazer a comprar
          </BotaoCardGlobal>
        </NavLink>
      </>
    )
  }

  return (
    <CardContainer>
      <PaddingTopGlobal>
        <TitutoGlobal>Carrinho</TitutoGlobal>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
      </PaddingTopGlobal>
    </CardContainer>
  )
}