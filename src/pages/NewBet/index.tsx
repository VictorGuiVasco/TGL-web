import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'

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
  PriceContainer,
  RulesContainer,
  SaveButton,
  Scroll,
  Text,
  TitleContainer,
  TotalPrice,
  TrashButton,
} from './styles'
import { Container } from '../../assets/styles/global'

interface CartProps {
  type: string
  numbers: string
  date?: string
  price: string
  color: string
}

const NewBet: React.FC = () => {
  const bets = useSelector((state: RootState) => state.bets)[0]

  const [indexGame, setIndexGame] = useState(0)
  const [cartData, setCartData] = useState<Array<CartProps>>([])
  let data = cartData

  const selectedGame = bets?.types[indexGame]

  let numberSelected: number[] = []

  function getRandomIntInclusive(max: number) {
    var num = Math.ceil(Math.random() * max)
    while (numberSelected.indexOf(num) >= 0) {
      num = Math.ceil(Math.random() * max)
    }
    return num
  }

  function changeIndexBet(index: number) {
    setIndexGame(index)
  }

  function addNumber(num: number) {
    if (numberSelected.some((elem) => elem === num)) {
      console.log('ja tem')
    } else if (numberSelected.length === selectedGame['max-number']) {
      console.log('cheio')
    } else {
      numberSelected.push(num)
    }
    console.log(numberSelected)
  }

  function completeGame() {
    var numOfEmptySpaces = selectedGame['max-number'] - numberSelected.length
    if (numOfEmptySpaces === 0) {
      numberSelected = []
      numOfEmptySpaces = selectedGame['max-number']
    }
    for (var i = 0; i < numOfEmptySpaces; i++) {
      numberSelected.push(getRandomIntInclusive(selectedGame?.range))
    }

    console.log(numberSelected)
  }

  function clearGame() {
    numberSelected = []
  }

  function addToCart() {
    if (numberSelected.length !== selectedGame['max-number']) {
      console.log('encha o cart')
      return
    }

    numberSelected.sort((num1, num2) => {
      if (num1 > num2) return 1
      if (num1 < num2) return -1
      return 0
    })

    const price = selectedGame.price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })

    let temporaryData = cartData

    temporaryData.push({
      type: selectedGame?.type,
      numbers: numberSelected.join(', '),
      date: '07/07/2021',
      price,
      color: selectedGame.color,
    })

    setCartData(temporaryData)
  }

  let range = []
  for (let i = 1; i <= selectedGame?.range; i++) {
    range.push(i)
  }

  return (
    <Container>
      <Header />
      <Main>
        <section>
          <TitleContainer>
            <Text>NEW BET</Text>
            <BetNameText>FOR {selectedGame.type}</BetNameText>
          </TitleContainer>

          <BetOptions>
            <p>Choose a game</p>
            {bets &&
              selectedGame &&
              bets?.types.map((elem, index) => (
                <BetButton
                  key={index}
                  backgroundColor={
                    elem.type === selectedGame.type ? elem.color : '#FFF'
                  }
                  fontColor={
                    !(elem.type === selectedGame.type) ? elem.color : '#FFF'
                  }
                  borderColor={elem.color}
                  onClick={() => {
                    changeIndexBet(index)
                  }}
                >
                  {elem.type}
                </BetButton>
              ))}
          </BetOptions>

          <RulesContainer>
            <h1>Fill your bet</h1>
            <p>{selectedGame.description}</p>
          </RulesContainer>

          <Card>
            {range.map((elem) => (
              <NumberButton
                color={
                  numberSelected.some((num) => num === elem)
                    ? selectedGame.color
                    : ''
                }
                onClick={() => {
                  addNumber(elem)
                }}
                key={elem}
              >
                {elem}
              </NumberButton>
            ))}
          </Card>

          <ButtonContainer>
            <Button onClick={completeGame}>Complete Game</Button>
            <Button onClick={clearGame}>Clear Game</Button>
            <CartButton onClick={addToCart}>
              <img src={cartIcon} alt="cart" />
              Add to cart
            </CartButton>
          </ButtonContainer>
        </section>
        <section>
          <CartContainer>
            <h1>CART</h1>

            <Scroll>
              {data.map((elem) => (
                <BetContainer key={elem.type}>
                  <TrashButton>
                    <img src={trashIcon} alt="deletar" />
                  </TrashButton>
                  <BetCard
                    type={elem.type}
                    numbers={elem.numbers}
                    price={elem.price}
                    color={elem.color}
                  />
                </BetContainer>
              ))}
            </Scroll>

            <PriceContainer>
              <h1>CART </h1>
              {!!cartData ? (
                <TotalPrice>TOTAL: R$ 7,00</TotalPrice>
              ) : (
                <TotalPrice>Vazio</TotalPrice>
              )}
            </PriceContainer>

            <SaveButton>Save &rarr;</SaveButton>
          </CartContainer>
        </section>
      </Main>
    </Container>
  )
}

export default NewBet
