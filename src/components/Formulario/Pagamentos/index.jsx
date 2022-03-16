import React from 'react'
import {  } from '../../../styles/GlobalStyles'
import {
  FormPagamento,
  FormContainerBox,
  FormNameContainer,
  FormName,
  Label,
  InputText
} from '../../../pages/Finalizacao/styles'

export default function Pagamentos() {
  return (
    <>
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
      <br />
    </>
  )
}
