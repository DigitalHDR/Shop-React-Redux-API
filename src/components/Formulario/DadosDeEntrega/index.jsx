import React from 'react'
import {
  FormContainerBox,
  FormNameContainer,
  FormName,
  Label,
  InputText,
  FormPaisEstadoCep,
} from '../../../pages/Finalizacao/styles'

export default function DadosDeEntrega() {
  return (
    <>
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
        <FormNameContainer style={{ width: '70%' }}>
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
    </>
  )
}
