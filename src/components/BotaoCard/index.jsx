import React from 'react'
import { BotaoCardGlobal } from '../../styles/GlobalStyles'

export default function BotaoCard(props) {
  return (
    <BotaoCardGlobal>
      {props.children}
    </BotaoCardGlobal>
  )
}
