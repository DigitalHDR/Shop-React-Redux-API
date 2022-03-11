import React from 'react'
import { BtnGlobal } from '../../styles/GlobalStyles'

export default function BotaoFilter(props) {
  return (
    <BtnGlobal onClick={props.onClick}>
      {props.children}
    </BtnGlobal>
  )
}
