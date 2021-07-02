import React from 'react'

import { Lottery, Tag, TagContainer, Title, TitleContainer } from './styles'

const LandingTitles: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <Title>The Greatest App</Title>
        <TagContainer>
          <Tag>for</Tag>
        </TagContainer>
        <Lottery>LOTTERY</Lottery>
      </TitleContainer>
    </>
  )
}

export default LandingTitles
