import React from 'react'

import Header from '../../components/Header'
import BetButton from '../../components/BetButton'
import BetCard from '../../components/BetCard'

import cartIcon from '../../assets/images/icons/shopping-cart.svg'
import trashIcon from '../../assets/images/icons/trash.svg'

import {
  BetContainer,
  BetNameText,
  BetOptions,
  Button,
  ButtonContainer,
  Card,
  CartButton,
  CartContainer,
  Main,
  NumberButton,
  RulesContainer,
  SaveButton,
  Scroll,
  Text,
  TitleContainer,
  TotalPrice,
  TrashButton,
} from './styles'
import { Container } from '../../assets/styles/global'

const NewBet: React.FC = () => {
  const data = {
    type: 'Lotofácil',
    description:
      'Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!',
    range: 25,
    price: 2.5,
    'max-number': 15,
    color: '#7F3992',
    'min-cart-value': 30,
  }

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

  let range = []
  for (let i = 1; i <= data.range; i++) {
    range.push(i)
  }

  return (
    <Container>
      <Header />
      <Main>
        <section>
          <TitleContainer>
            <Text>NEW BET</Text>
            <BetNameText>FOR {data.type}</BetNameText>
          </TitleContainer>

          <BetOptions>
            <p>Choose a game</p>
            {DUMMY_BETS.types.map((elem) => (
              <BetButton key={elem.type} type={elem.type} color={elem.color} />
            ))}
          </BetOptions>

          <RulesContainer>
            <h1>Fill your bet</h1>
            <p>{data.description}</p>
          </RulesContainer>

          <Card>
            {range.map((elem) => (
              <NumberButton key={elem}>{elem}</NumberButton>
            ))}
          </Card>

          <ButtonContainer>
            <Button>Complete Game</Button>
            <Button>Clear Game</Button>
            <CartButton>
              <img src={cartIcon} alt="cart" />
              Add to cart
            </CartButton>
          </ButtonContainer>
        </section>
        <section>
          <CartContainer>
            <h1>CART</h1>

            <Scroll>
              {DUMMY_DATA.map((elem) => (
                <BetContainer>
                  <TrashButton>
                    <img src={trashIcon} alt="deletar" />
                  </TrashButton>
                  <BetCard
                    key={elem.type}
                    type={elem.type}
                    numbers={elem.numbers}
                    price={elem.price}
                    color={elem.color}
                  />
                </BetContainer>
              ))}
            </Scroll>

            <h1>
              CART{' '}
              {!!DUMMY_DATA ? (
                <TotalPrice>TOTAL: R$ 7,00</TotalPrice>
              ) : (
                <TotalPrice>Vazio</TotalPrice>
              )}
            </h1>

            <SaveButton>Save &rarr;</SaveButton>
          </CartContainer>
        </section>
      </Main>
    </Container>
  )
}

export default NewBet
