//pages/finalizacao/index.jsx
import React from 'react'
import Pagamentos from '../../components/Formulario/Pagamentos'
import SeuCarrinho from '../../components/Formulario/SeuCarrinho'
import Preferencias from '../../components/Formulario/Preferencias'


import { PaddingTopGlobal, TitutoGlobal, MarginTopGlobal } from '../../styles/GlobalStyles'

import { ContainerBox, Box, Form, } from './styles'

import DadosDeEntrega from '../../components/Formulario/DadosDeEntrega'

export default function Finalizacao() {
  return (
    <PaddingTopGlobal>
      <MarginTopGlobal />
      <TitutoGlobal>Finalizar Comprar</TitutoGlobal>
      <ContainerBox>
        <Box>
          <Form>
            <DadosDeEntrega />
            <Preferencias />
            <Pagamentos />
          </Form>
          <Form>
            <SeuCarrinho />
          </Form>
        </Box>
      </ContainerBox>
    </PaddingTopGlobal>
  )
}
