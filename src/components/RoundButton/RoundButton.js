import React from 'react'
import SCRoundButton from './RoundButton.styled'

export default function RoundButton({ children, onClick, className }) {
  return (
    <SCRoundButton
      onClick={() => onClick && onClick()}
      className={className}
    >
      {children}
    </SCRoundButton>
  )
}
