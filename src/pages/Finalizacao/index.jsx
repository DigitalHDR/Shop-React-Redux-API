//pages/finalizacao/index.jsx
import React from 'react'
import { useSelector } from 'react-redux'

import {
  PaddingTopGlobal,
  TitutoGlobal,
  BotaoCardGlobal
} from '../../styles/GlobalStyles'
import {
  ContainerBox,
  Box,
  Form,
  FormContainerBox,
  FormName,
  Label,
  InputText,
  FormPaisEstadoCep,
  Preferencias,
  FormNameContainer,
  FormPagamento,
  CarrinhoQuantidade,
  Bolinha,
  TabelaLista,
  TabelaListaItem,
  Preco,
  TabelaTiulo
} from './styles'

export default function Finalizacao() {
  const state = useSelector((state) => state.handleCart)

  let total = 0
  const itemList = (item) => {
    total += item.price
    return (
      <div>
        <TabelaListaItem>
          <TabelaTiulo>
            <p><b>{item.title}</b></p>
            <small>{item.description.substring(0, 50) + '...'}</small>
          </TabelaTiulo>
          <Preco>
            <p>R$ {item.price}</p>
          </Preco>
        </TabelaListaItem>
      </div>
    )
  }

  return (
    <PaddingTopGlobal>
      <TitutoGlobal>Finalizar Comprar</TitutoGlobal>
      <ContainerBox>
        <Box>
          <Form>
            <h2>Dados de entrega</h2>
            <FormContainerBox>
              <FormNameContainer>
                <FormName>
                  <Label>Nome
                    <InputText type="text" />
                  </Label>
                </FormName>
              </FormNameContainer>
              <FormNameContainer>
                <FormName>
                  <Label>Sobrenome
                    <InputText type="text" />
                  </Label>
                </FormName>
              </FormNameContainer>
            </FormContainerBox>
            <FormName>
              <Label>Nome do usuário
                <InputText type="email" />
              </Label>
            </FormName>
            <FormName>
              <Label>E-mail (opcional)
                <InputText type="email" />
              </Label>
            </FormName>
            <FormName>
              <Label>Endereço
                <InputText type="text" />
              </Label>
            </FormName>
            <FormName>
              <Label>Endereço 2 (Opcional)
                <InputText type="text" />
              </Label>
            </FormName>
            <FormPaisEstadoCep>
              <FormNameContainer>
                <FormName>
                  <Label>País
                    <InputText type="text" />
                  </Label>
                </FormName>
              </FormNameContainer>
              <FormNameContainer style={{ width: '50%' }}>
                <FormName>
                  <Label>Estado
                    <InputText type="text" />
                  </Label>
                </FormName>
              </FormNameContainer>
              <FormNameContainer style={{ width: '50%' }}>
                <FormName>
                  <Label>Cep
                    <InputText type="text" />
                  </Label>
                </FormName>
              </FormNameContainer>
            </FormPaisEstadoCep>
            <hr />
            <Preferencias>
              <div><input type="checkbox" /> O endereço de entrega é o mesmo que meu endereço de cobrança</div>
              <div><input type="checkbox" /> Salve esta informação para a próxima vez</div>
            </Preferencias>
            <hr />
            <h2>Pagamento</h2>
            <FormPagamento>
              <div><input type="radio" /> Cartão de crédito</div>
              <div><input type="radio" /> Cartão de débito</div>
              <div><input type="radio" /> PayPal</div>
            </FormPagamento>
            <FormContainerBox>
              <FormNameContainer>
                <FormName>
                  <Label> Nome no cartão
                    <InputText type="text" />
                    <span>Nome completo conforme exibido no cartão</span>
                  </Label>
                </FormName>
              </FormNameContainer>
              <FormNameContainer>
                <FormName>
                  <Label> Número do Cartão de Crédito
                    <InputText type="text" />
                  </Label>
                </FormName>
              </FormNameContainer>
            </FormContainerBox>
            <FormContainerBox>
              <FormName>
                <Label>
                  <p>Expiração</p>
                  <InputText style={{ width: '150px' }} type="text" />
                </Label>
              </FormName>
              <FormName>
                <Label>
                  <p>CVV</p>
                  <InputText style={{ width: '150px' }} type="text" />
                </Label>
              </FormName>
            </FormContainerBox>
            <hr />
          </Form>


          <Form>
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
                  <b>R$ {total}</b>
                </Preco>
              </TabelaListaItem>
            </TabelaLista>

            <br />

            <BotaoCardGlobal type='submit' style={{ width: '100%' }}>
              Finalizar a compra
            </BotaoCardGlobal>
          </Form>

        </Box>
      </ContainerBox>
    </PaddingTopGlobal>
  )
}
