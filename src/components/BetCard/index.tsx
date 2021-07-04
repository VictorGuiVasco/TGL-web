import React from 'react'

import { Bar, Card, Text } from './styles'

interface BetCardProps {
  type: string
  numbers: string
  date?: string
  price: string
  color: string
}

const BetCard: React.FC<BetCardProps> = ({
  type,
  numbers,
  date,
  price,
  color,
}) => {
  return (
    <Card>
      <Bar style={{ background: color }} />
      <Text>{numbers}</Text>
      {!!date && (
        <span>
          {date} - ({price})
        </span>
      )}

      {!!date ? (
        <Text>{type}</Text>
      ) : (
        <Text>
          {type} <p>{price}</p>
        </Text>
      )}
    </Card>
  )
}

export default BetCard
