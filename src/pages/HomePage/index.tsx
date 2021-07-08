import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { fetchBets } from '../../store/actions/betActions'

import Header from '../../components/Header'
//import BetButton from '../../components/BetButton'
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
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.games)
  //const bets = useSelector((state: RootState) => state.bets)[0]

  const DUMMY_DATA = data

  useEffect(() => {
    dispatch(fetchBets())
  }, [dispatch])
  //const bets = useSelector((state: RootState) => state.bets)[0]
  return (
    <Container>
      <Header />

      <Main>
        <ButtonsContainer>
          <Title>RECENT GAMES</Title>
          <FilterContainer>
            <Text>Filters</Text>

            {/* {bets &&
              bets.types.map((elem) => (
                <BetButton
                  key={elem.type}
                  type={elem.type}
                  color={elem.color}
                />
              ))} */}
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
