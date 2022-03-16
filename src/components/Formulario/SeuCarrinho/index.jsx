import React from 'react'
import { useSelector } from 'react-redux'
import { BotaoCardGlobal } from '../../../styles/GlobalStyles'
import {
  CarrinhoQuantidade,
  Bolinha,
  TabelaLista,
  TabelaListaItem,
  TabelaTiulo,
  Preco
} from '../../../pages/Finalizacao/styles'

export default function SeuCarrinho() {
  const state = useSelector((state) => state.handleCart)

  let total = 0
  const itemList = (item) => {
    total += item.price
    return (
      <div key={item.id}>
        <TabelaListaItem>
          <TabelaTiulo>
            <p><b>{item.title}</b></p>
            <small>{item.description.substring(0, 50) + '...'}</small>
          </TabelaTiulo>
          <Preco>
            <p>R$ {item.price.toFixed(2)}</p>
          </Preco>
        </TabelaListaItem>
      </div>
    )
  }

  return (
    <>
      <CarrinhoQuantidade>
        <h2>Seu carrinho</h2>
        <Bolinha>
          <h2>{state.length}</h2>
        </Bolinha>
      </CarrinhoQuantidade>
      <TabelaLista>
        {state.map(itemList)}
        <TabelaListaItem style={{ backgroundColor: '#fff' }}>
          <TabelaTiulo>
            <b>Total (BR)</b>
          </TabelaTiulo>
          <Preco>
            <b>R$ {total.toFixed(2)}</b>
          </Preco>
        </TabelaListaItem>
      </TabelaLista>
      <br />
      <BotaoCardGlobal type='submit' style={{ width: '100%' }}>
        Finalizar a compra
      </BotaoCardGlobal>
    </>
  )
}
