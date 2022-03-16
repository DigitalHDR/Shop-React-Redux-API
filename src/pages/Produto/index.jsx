//src/pages/produto/index.jsx
import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { BotaoCardGlobal, PaddingTopGlobal, TitutoGlobal } from '../../styles/GlobalStyles'
import { FaBeer } from 'react-icons/fa';
//#################do video completo ############
// import { useDispatch } from 'react-redux'
// import { addItem } from '../../redux/action';
//###############################################
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/action';

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

  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(addCart(product))
  }

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
        <TitutoGlobal>
          Carregando itens...
        </TitutoGlobal>
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
                <Price>R$ {product.price.toFixed(2)}</Price>
                <Pontuacao>
                  Pontuação: {product.rating && product.rating.rate}
                </Pontuacao>
                <BoxBotaoes>
                  <BotaoCardGlobal >
                    <NavLink
                      style={{ color: '#000' }}
                      to='/finalizacao'>
                      Comprar
                    </NavLink>
                  </BotaoCardGlobal>
                  <BotaoCardGlobal
                    onClick={() => addProduct(product)}>
                    Add Carrinho
                  </BotaoCardGlobal>
                </BoxBotaoes>
              </Descricao>
            </Card>
          </CardContainer>
        }
      </PaddingTopGlobal>
    </>
  )
}
