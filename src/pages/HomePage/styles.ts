import styled from 'styled-components'
import { SubmitButton } from '../../assets/styles/global'

export const Main = styled.main`
  margin-top: 4.6875rem;
  padding: 0 12.5rem 0 8.125rem;

  flex: 1;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const Button = styled(SubmitButton)`
  margin: 0;
  margin-left: auto;
  font-size: 1.5rem;
`

export const BetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.1875rem;
`
