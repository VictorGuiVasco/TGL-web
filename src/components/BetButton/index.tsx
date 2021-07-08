import React, { HTMLAttributes, ReactNode } from 'react'

import { Button } from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  backgroundColor: string
  fontColor: string
  borderColor: string
  children: ReactNode
}

const BetButton: React.FC<ButtonProps> = ({
  borderColor,
  backgroundColor,
  fontColor,
  children,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      style={{ borderColor, backgroundColor, color: fontColor }}
    >
      {children}
    </Button>
  )
}

export default BetButton
