import React, { ReactNode } from 'react'

import {
  Card,
  Title,
} from './styles'

interface FormProps {
  children: ReactNode
  type: string
}

const Form: React.FC<FormProps> = ({ children, type }) => {
  return (
    <>
      <Title>{type}</Title>
      <Card>
        {children}
      </Card>
    </>
  )
}

export default Form
