import React from 'react'

import { Button } from './styles'

interface ButtonProps {
  type: string
  color: string
}

const BetButton: React.FC<ButtonProps> = ({ type, color}) => {
  return <Button style={{ borderColor: color, color: color }}>{type}</Button>
}

export default BetButton
