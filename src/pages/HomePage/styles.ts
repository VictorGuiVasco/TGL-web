import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Main = styled.main`
  margin-top: 4.6875rem;
  padding: 0 12.5rem 0 8.125rem;
  flex: 1;

  @media (max-width: 800px) {
    padding: 0 5rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FilterContainer = styled(ButtonsContainer)`
  button {
    padding: 0.625rem 1.875rem;
    margin-right: 1.5625rem;

    text-align: center;
    font-size: 16px;

    border: 2px solid;
    border-radius: 100px;

    font: italic 700 0.875rem sans-serif;

    transition: filter 0.02;
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 1rem 0;
  }

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Text = styled.p`
  font: italic 400 1.0625rem sans-serif;
  color: #707070;
  margin-right: 0.9375rem;
`

export const Title = styled.h3`
  font: italic 700 1.5rem sans-serif;
  color: #707070;
  margin-right: 2.8125rem;
`

export const Button = styled(Link)`
  width: fit-content;
  margin: 0;
  margin-left: auto;

  background: transparent;
  border: 0;
  font: italic 700 1.5rem sans-serif;
  color: #b5c401;
  text-align: center;

  @media (max-width: 800px) {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 450px) {
    position: relative;
    margin: 0;
  }
`

export const BetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.1875rem;

  p {
    text-align: left;
    font: italic 700 1.5rem sans-serif;
    color: #707070;
    margin: 0 0 2.1875rem;
  }
`
