import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { fetchBets } from '../../store/actions/betActions'

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

interface BetsProps {
  type: string
  description: string
  range: number
  price: number
  'max-number': number
  color: string
  'min-cart-value': number
}

interface GamesProps {
  type: string
  numbers: string
  price: string
  color: string
  date?: string
}

const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.games)
  const bets = useSelector((state: RootState) => state.bets)[0]

  const [indexGame, setIndexGame] = useState<number[]>([])
  const [selectedGame, setSelectedGame] = useState<BetsProps[]>([])
  const [filtered, setFiltered] = useState<GamesProps[]>([])

  useEffect(() => {
    let tempGames: BetsProps[] = []
    let tempFiltered: GamesProps[] = []
    for (let value of indexGame) {
      let tempGame: BetsProps = bets?.types[value]
      tempGames.push(tempGame)
    }

    for (let value of tempGames) {
      let temp = data.filter((element) => element.type === value.type)
      for (let elem of temp) {
        tempFiltered.push(elem)
      }
    }
    if (tempFiltered.length !== 0) {
      setFiltered(tempFiltered)
    } else {
      setFiltered(data)
    }
    setSelectedGame(tempGames)
  }, [dispatch, indexGame])

  useEffect(() => {
    dispatch(fetchBets())
  }, [])

  function changeIndexBet(index: number, type: string) {
    let num = indexGame.slice()
    if (indexGame.some((elem) => elem === index)) {
      num.splice(indexGame.indexOf(index), 1)
      setIndexGame(num)
      setSelectedGame([])
    } else {
      num.push(index)
      num.sort()
      setIndexGame(num)
    }
  }

  return (
    <Container>
      <Header />

      <Main>
        <ButtonsContainer>
          <Title>RECENT GAMES</Title>
          <FilterContainer>
            <Text>Filters</Text>

            {bets &&
              selectedGame &&
              bets?.types.map((elem, index) => (
                <BetButton
                  key={index}
                  backgroundColor={
                    selectedGame.find((game) => game.type === elem.type)
                      ? elem.color
                      : '#FFF'
                  }
                  fontColor={
                    !selectedGame.find((game) => game.type === elem.type)
                      ? elem.color
                      : '#FFF'
                  }
                  borderColor={elem.color}
                  onClick={() => {
                    changeIndexBet(index, elem.type)
                  }}
                >
                  {elem.type}
                </BetButton>
              ))}
          </FilterContainer>

          <Button to="/new-bet">New Bet &rarr;</Button>
        </ButtonsContainer>

        <BetContainer>
          {filtered.length !== 0 ? (
            filtered.map((elem, index) => (
              <BetCard
                key={index}
                type={elem.type}
                numbers={elem.numbers}
                date={elem.date}
                price={elem.price}
                color={elem.color}
              />
            ))
          ) : (
            <p>VAZIO</p>
          )}
        </BetContainer>
      </Main>

      <Footer>
        <p>Copyright 2021 Luby Software</p>
      </Footer>
    </Container>
  )
}

export default HomePage
