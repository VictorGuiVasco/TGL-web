import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { gamesActions } from '../../store/slices/gamesSlice'

import Header from '../../components/Header'
import BetButton from '../../components/BetButton'
import BetCard from '../../components/BetCard'

import cartIcon from '../../assets/images/icons/shopping-cart.svg'
import trashIcon from '../../assets/images/icons/trash.svg'

import Swal from 'sweetalert2'

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

interface GamesProps {
  type: string
  numbers: string
  date?: string
  price: string
  color: string
}

const NewBet: React.FC = () => {
  const dispatch = useDispatch()
  const bets = useSelector((state: RootState) => state.bets)[0]

  const [indexGame, setIndexGame] = useState(0)
  const [numberSelected, setNumberSelected] = useState<number[]>([])
  const [cartData, setCartData] = useState<Array<GamesProps>>([])
  const [actualPrice, setActualPrice] = useState(0)
  const [localePrice, setLocalePrice] = useState('')

  const selectedGame = bets?.types[indexGame]

  useEffect(() => {
    const price = actualPrice.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    setLocalePrice(price)
  }, [actualPrice])

  function getRandomIntInclusive(max: number, arr: number[]) {
    var num = Math.ceil(Math.random() * max)
    while (arr.indexOf(num) >= 0) {
      num = Math.ceil(Math.random() * max)
    }
    return num
  }

  function changeIndexBet(index: number) {
    setIndexGame(index)
    setNumberSelected([])
  }

  function addNumber(num: number) {
    if (numberSelected.some((elem) => elem === num)) {
      let temp = numberSelected.slice()
      temp.splice(numberSelected.indexOf(num), 1)
      setNumberSelected(temp)
    } else if (numberSelected.length === selectedGame['max-number']) {
      Swal.fire('Cartela cheia')
    } else {
      setNumberSelected([...numberSelected, num])
    }
  }

  function completeGame() {
    let tempNumbers = numberSelected.slice()
    var numOfEmptySpaces = selectedGame['max-number'] - tempNumbers.length
    if (numOfEmptySpaces === 0) {
      console.log(numOfEmptySpaces)
      tempNumbers = []
      numOfEmptySpaces = selectedGame['max-number']
    }
    for (var i = 0; i < numOfEmptySpaces; i++) {
      tempNumbers.push(getRandomIntInclusive(selectedGame?.range, tempNumbers))
    }
    setNumberSelected(tempNumbers)
  }

  function clearGame() {
    setNumberSelected([])
  }

  function addToCart() {
    if (numberSelected.length !== selectedGame['max-number']) {
      let tempNumbers = numberSelected.slice()
      let numOfEmptySpaces = selectedGame['max-number'] - tempNumbers.length
      let wordLeft = numOfEmptySpaces === 1 ? 'Falta' : 'Faltam'
      let wordNumber = numOfEmptySpaces === 1 ? 'número' : 'números'
      Swal.fire(
        'Preencha a cartela',
        `${wordLeft} ${numOfEmptySpaces} ${wordNumber}`,
      )
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

    let temporaryData = {
      type: selectedGame?.type,
      numbers: numberSelected.join(', '),
      price,
      color: selectedGame.color,
    }
    setNumberSelected([])
    setActualPrice(actualPrice + selectedGame.price)
    setCartData([...cartData, temporaryData])
  }

  function deleteGame(index: number, type: string) {
    let data = cartData.slice()
    data.splice(index, 1)

    let tempData = bets?.types.find((elem) => elem.type === type)

    setActualPrice(actualPrice - (tempData?.price ? tempData?.price : 0))
    setCartData(data)
  }

  function saveGame() {
    if (actualPrice === 0) {
      Swal.fire('Preencha o cart')
      return
    } else if (actualPrice < 30) {
      Swal.fire('Compre no minimo R$ 30,00')
      return
    } else {
      dispatch(gamesActions.addGames(cartData))
      setCartData([])
      setActualPrice(0)
      Swal.fire('Parabéns pela compra')
    }
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
            <BetNameText>FOR {selectedGame?.type}</BetNameText>
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
            <p>{selectedGame?.description}</p>
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
              {cartData.map((elem, index) => (
                <BetContainer key={index}>
                  <TrashButton
                    onClick={() => {
                      deleteGame(index, elem.type)
                    }}
                  >
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
              {actualPrice !== 0 ? <h1>CART</h1> : <h1>ADICIONE ITENS</h1>}
              {actualPrice !== 0 && (
                <TotalPrice>TOTAL: {localePrice}</TotalPrice>
              )}
            </PriceContainer>

            <SaveButton onClick={saveGame}>Save &rarr;</SaveButton>
          </CartContainer>
        </section>
      </Main>
    </Container>
  )
}

export default NewBet
