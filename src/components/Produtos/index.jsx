import React, { useState, useEffect } from 'react'
import { Tituto, Card, Box } from './styles'

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
        console.log(filter)
      }

      return () => {
        componentMounted = false
      }
    }
    getProdutos()
  }, [])

  const Loading = () => {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const MostrarProdutos = () => {
    return (
      <div>
        <Tituto>Produtos a venda</Tituto>

        <Box>
          {filter.map((produto) => {
            return (
              <Card key={produto.id}>

                <img
                  width={150}
                  height={150}
                  src={produto.image}
                  alt={produto.title}
                />

                <div>
                  <h5>{produto.title.substring(0, 10)}</h5>
                  <p>{produto.description.substring(0, 50)}</p>
                  <button>Comprar</button>
                </div>

              </Card>
            )
          })}
        </Box>

      </div>
    )
  }

  return (
    <div>
      {loading ? <Loading /> : <MostrarProdutos />}
    </div>
  )
}