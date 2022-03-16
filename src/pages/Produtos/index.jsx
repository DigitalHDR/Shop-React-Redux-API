import React, { useState, useEffect } from 'react'
import { PaddingTopGlobal, TitutoGlobal } from '../../styles/GlobalStyles'
import BotaoFilter from '../../components/BotaoFilter'
import BotaoCard from '../../components/BotaoCard'
import { NavLink } from 'react-router-dom'

import {
  Card,
  Box,
  Image,
  Descricao,
  TituloCard,
  Paragrafo,
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
        <TitutoGlobal>
          Carregando itens...
        </TitutoGlobal>
      </PaddingTopGlobal>
    )
  }

  const filterProduto = (categoria) => {
    const resultadoFilter = data.filter((resp) => resp.category === categoria)
    return setFilter(resultadoFilter)
  }

  return (
    <PaddingTopGlobal>
      <TitutoGlobal>Produtos a venda</TitutoGlobal>

      <Box>
        <BotaoFilter onClick={() => setFilter(data)}>all</BotaoFilter>
        <BotaoFilter onClick={() => filterProduto("men's clothing")}>Men's clothing</BotaoFilter>
        <BotaoFilter onClick={() => filterProduto("women's clothing")}>Women's clothing</BotaoFilter>
        <BotaoFilter onClick={() => filterProduto("jewelery")}>Jewelery</BotaoFilter>
        <BotaoFilter onClick={() => filterProduto("electronics")}>Electronic</BotaoFilter>
      </Box>
      <Box>
        {loading ? <Loading /> : <>{filter.map((produto) => {
          return (
            <Card key={produto.id}>
              <Image src={produto.image} alt={produto.title} />
              <hr />
              <Descricao>
                <TituloCard>{produto.title.substring(0, 10)}</TituloCard>
                <Paragrafo>
                  {produto.description.substring(0, 50) + '...'}
                </Paragrafo>
                <p><b>R$ {produto.price.toFixed(2)}</b></p>
              </Descricao>
              <NavLink to={`/produtos/${produto.id}`}><BotaoCard>Comprar</BotaoCard></NavLink>
            </Card>
          )
        })}</>}
      </Box>
    </PaddingTopGlobal>
  )
}