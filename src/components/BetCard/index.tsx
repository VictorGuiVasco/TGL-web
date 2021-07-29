import React from 'react'

import { Bar, Card, Text } from './styles'

interface BetCardProps {
  type: string
  numbers: string
  price: number
  color: string
  date?: string
}

const BetCard: React.FC<BetCardProps> = ({
  type,
  numbers,
  date,
  price,
  color,
}) => {
  if (!!date) {
    let bar = '/'
    date = date?.slice(0, -10)
    date = date?.replace(/-/g, bar)
  }

  const currency = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card>
      <Bar style={{ background: color }} />
      {!!date ? (
        <Text>{numbers}</Text>
      ) : (
        <Text style={{ fontSize: 15 }}>{numbers}</Text>
      )}

      {!!date && (
        <span>
          {date} - ({currency})
        </span>
      )}

      {!!date ? (
        <Text>{type}</Text>
      ) : (
        <Text style={{ fontSize: 15 }}>
          {type} <p style={{ fontSize: 15 }}>{currency}</p>
        </Text>
      )}
    </Card>
  )
}

export default BetCard
