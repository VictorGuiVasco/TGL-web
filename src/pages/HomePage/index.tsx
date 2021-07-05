import React from 'react'

import Header from '../../components/Header'
import BetButton from '../../components/BetButton'
import BetCard from '../../components/BetCard'

import {
  BetContainer,
  ButtonsContainer,
  Button,
  FilterContainer,
  Main,
  Text,
  Title,
} from './styles'
import { Container, Footer } from '../../assets/styles/global'

const HomePage: React.FC = () => {
  const DUMMY_BETS = {
    types: [
      {
        type: 'Lotofácil',
        description:
          'Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!',
        range: 25,
        price: 2.5,
        'max-number': 15,
        color: '#7F3992',
        'min-cart-value': 30,
      },
      {
        type: 'Mega-Sena',
        description:
          'Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.',
        range: 60,
        price: 4.5,
        'max-number': 6,
        color: '#01AC66',
        'min-cart-value': 30,
      },
      {
        type: 'Quina',
        description:
          'Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.',
        range: 80,
        price: 2,
        'max-number': 5,
        color: '#F79C31',
        'min-cart-value': 30,
      },
    ],
  }

  const DUMMY_DATA = [
    {
      type: 'Lotofácio',
      numbers: '01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25',
      date: '30/11/2020',
      price: 'R$ 2,50',
      color: '#7F3992',
    },
    {
      type: 'Mega-Sena',
      numbers: '01, 02, 04, 05, 06',
      date: '29/10/2020',
      price: 'R$ 4,00',
      color: '#01AC66',
    },
  ]

  return (
    <Container>
      <Header />

      <Main>
        <ButtonsContainer>
          <Title>RECENT GAMES</Title>
          <FilterContainer>
            <Text>Filters</Text>

            {DUMMY_BETS.types.map((elem) => (
              <BetButton key={elem.type} type={elem.type} color={elem.color} />
            ))}
          </FilterContainer>

          <Button to="/new-bet">New Bet &rarr;</Button>
        </ButtonsContainer>

        <BetContainer>
          {DUMMY_DATA.map((elem) => (
            <BetCard
              key={elem.type}
              type={elem.type}
              numbers={elem.numbers}
              date={elem.date}
              price={elem.price}
              color={elem.color}
            />
          ))}
        </BetContainer>
      </Main>

      <Footer>
        <p>Copyright 2021 Luby Software</p>
      </Footer>
    </Container>
  )
}

export default HomePage
