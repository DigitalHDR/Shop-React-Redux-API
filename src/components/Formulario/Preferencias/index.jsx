import React from 'react'
import {
  FormPreferencias
} from '../../../pages/Finalizacao/styles'

export default function Preferencias() {
  return (
    <>
      <hr />
      <FormPreferencias>
        <div><input type="checkbox" /> O endereço de entrega é o mesmo que meu endereço de cobrança</div>
        <div><input type="checkbox" /> Salve esta informação para a próxima vez</div>
      </FormPreferencias>
      <hr />
    </>
  )
}
