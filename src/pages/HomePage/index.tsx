import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { fetchBets } from '../../store/actions/betActions'

import Header from '../../components/Header'
import BetButton from '../../components/BetButton'
import BetCard from '../../components/BetCard'

import Cookies from 'universal-cookie'

import api from '../../services/api'

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
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
  min_cart_value: number
}

interface GamesProps {
  game_id: number
  type: string
  numbers: string
  price: number
  color: string
  date?: string
  created_at?: string
}

const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const cookies = new Cookies()

  const bets = useSelector((state: RootState) => state.bets)

  const [data, setData] = useState<GamesProps[]>([])
  const [indexGame, setIndexGame] = useState<number[]>([])
  const [selectedGame, setSelectedGame] = useState<BetsProps[]>([])
  const [filtered, setFiltered] = useState<GamesProps[]>([])

  const config = {
    headers: {
      Authorization: `Bearer ${cookies.get('token')}`,
    },
  }

  useEffect(() => {
    dispatch(fetchBets())
    let games: any[] = []

    api
      .get('bets', config)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        for (let value in data.data) {
          games.push(data.data[value])
        }
        setData(games)
        setFiltered(games)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    let tempGames: BetsProps[] = []
    let tempFiltered: GamesProps[] = []
    for (let value of indexGame) {
      let tempGame: BetsProps = bets[value]
      tempGames.push(tempGame)
    }

    for (let value of tempGames) {
      let temp = data.filter((element) => element.game_id === value.id - 1)
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
  }, [dispatch, indexGame, data])

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

            {bets.length > 0 &&
              selectedGame &&
              bets.map((elem, index) => (
                <BetButton
                  key={index}
                  backgroundColor={
                    selectedGame.find((game) => game?.id === elem.id)
                      ? elem.color
                      : '#FFF'
                  }
                  fontColor={
                    !selectedGame.find((game) => game?.id === elem.id)
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
                type={bets[elem.game_id]?.type}
                numbers={elem.numbers}
                date={elem.created_at}
                price={elem.price}
                color={bets[elem.game_id]?.color}
              />
            ))
          ) : (
            <p>Nenhum game comprado</p>
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
