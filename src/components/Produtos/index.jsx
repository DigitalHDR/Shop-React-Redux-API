import React, { useState, useEffect } from 'react'
import { PaddingTopGlobal } from '../../styles/GlobalStyles'
import Botao from '../Botao'

import {
  Tituto,
  Card,
  Box,
  Image,
  Descricao,
  TituloCard,
  Paragrafo,
  Btn,
} from './styles'


export default function Produtos() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let componentMounted = true
  
  useEffect(() => {
    const getProdutos = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
      }

      return () => {
        componentMounted = false
      }
    }
    getProdutos()
  }, [])

  const Loading = () => {
    return (
      <PaddingTopGlobal>
        Carregando itens...
      </PaddingTopGlobal>
    )
  }

  const filterProduto = (categoria) => {
    const resultadoFilter = data.filter((resp) => resp.category === categoria)
    return setFilter(resultadoFilter)
  }

  return (
    <PaddingTopGlobal>
      <Tituto>Produtos a venda</Tituto>

      <Box>
        <Botao onClick={() => setFilter(data)}>all</Botao>
        <Botao onClick={() => filterProduto("men's clothing")}>Men's clothing</Botao>
        <Botao onClick={() => filterProduto("women's clothing")}>Women's clothing</Botao>
        <Botao onClick={() => filterProduto("jewelery")}>Jewelery</Botao>
        <Botao onClick={() => filterProduto("electronics")}>Electronic</Botao>
      </Box>
      <Box>
        {loading ? <Loading /> : <>{filter.map((produto) => {
          return (
            <Card key={produto.id}>
              <Image src={produto.image} alt={produto.title} />
              <hr />
              <Descricao>
                <TituloCard>{produto.title.substring(0, 10)}</TituloCard>
                <Paragrafo>{produto.description.substring(0, 50) + '...'}</Paragrafo>
              </Descricao>
              <Btn>Comprar</Btn>
            </Card>
          )
        })}</>}
      </Box>
    </PaddingTopGlobal>
  )
}