import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BotaoCardGlobal, PaddingTopGlobal, TitutoGlobal } from '../../styles/GlobalStyles'
import { FaBeer } from 'react-icons/fa';

import {
  Card,
  ImageContainer,
  Image,
  Tituto,
  Descricao,
  TituloCard,
  Paragrafo,
  Price,
  CardContainer,
  Pontuacao,
  BoxBotaoes
} from './styles'

export default function Produto() {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProdutos = async () => {
      setLoading(true)
      const resposta = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await resposta.json())
      setLoading(false)
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

  return (
    <>
      <PaddingTopGlobal>
        <TitutoGlobal>Produtos</TitutoGlobal>
        {loading ? <Loading /> :
          <CardContainer >
            <Card>
              <ImageContainer>
                <Image src={product.image} alt={product.title} />
              </ImageContainer>
              <Descricao>
                <TituloCard>{product.title}</TituloCard>
                <Paragrafo>{product.description}</Paragrafo>
                <Price>R$ {product.price}</Price>
                <Pontuacao>
                  Pontuação: {product.rating && product.rating.rate}
                </Pontuacao>
                <BoxBotaoes>
                  <BotaoCardGlobal>Comprar</BotaoCardGlobal> 
                  <BotaoCardGlobal>Add Carrinho</BotaoCardGlobal>
                </BoxBotaoes>
              </Descricao>
            </Card>
          </CardContainer>
        }
      </PaddingTopGlobal>
    </>
  )
}
