import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 4.6875rem;
  padding: 0 12.5rem 0 8.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;

  section {
    position: relative;
    max-width: 37.5rem;
  }

  @media (max-width: 800px) {
    padding: 0 5rem;

    display: flex;
    flex-direction: column;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Text = styled.h1`
  text-align: center;
  font: italic 700 1.5rem sans-serif;

  color: #707070;
  text-transform: uppercase;
`

export const BetNameText = styled(Text)`
  margin-left: 0.625rem;
  font: italic 300 1.5rem sans-serif;
  color: #707070;
`

export const BetOptions = styled.div`
  margin-top: 2.0625rem;
  margin-bottom: 1.75rem;

  p {
    text-align: left;
    font: italic 700 1.0625rem sans-serif;
    color: #868686;
    margin-bottom: 1.5rem;
  }
`

export const RulesContainer = styled.div`
  margin-bottom: 1.6875rem;

  h1 {
    font: italic 700 1.0625rem sans-serif;
    color: #868686;
  }

  p {
    margin-top: 0.3125rem;
    font: italic 400 1.0625rem sans-serif;
    color: #868686;
  }
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(8, 1fr);
  }
`

export const NumberButton = styled.button`
  width: 3.9375rem;
  height: 4.0625rem;

  margin-right: 0.75rem;
  margin-bottom: 1.25rem;

  font: 700 1.25rem sans-serif;
  color: #ffffff;

  background: #adc0c4;
  border-radius: 100%;

  transition: filter 0.02;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 1.5rem;
  padding-bottom: 2.75rem;
`

export const Button = styled.button`
  padding: 1.1875rem 1.625rem;
  margin-right: 1.5625rem;

  text-align: center;
  font-size: 1rem;
  color: #27c383;

  border: 1px solid #27c383;
  border-radius: 10px;

  transition: filter 0.02;

  &:hover {
    filter: brightness(0.9);
  }
`

export const CartButton = styled(Button)`
  margin: 0;
  margin-left: auto;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: #27c383;
  color: #ffffff;

  img {
    margin-right: 0.625rem;
    width: 1.375rem;
    height: 1.375rem;
  }
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;

  margin-top: -2rem;
  padding: 2rem 0 0 1.1875rem;

  width: 19.975rem;

  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  position: absolute;
  right: 0;

  h1 {
    text-align: left;
    font: italic 700 1.5rem sans-serif;
    color: #707070;
    margin: 0 0 2.1875rem;
    display: flex;
  }
  @media (max-width: 800px) {
    margin: 2rem 0;
    position: relative;
  }
`

export const Scroll = styled.div`
  max-height: 15.625rem;
  overflow-y: auto;
`

export const BetContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TrashButton = styled.button`
  margin-right: 20px;
  transition: filter 0.02;

  &:hover {
    filter: brightness(0.9);
  }
`

export const TotalPrice = styled.h2`
  font: italic 700 1.5rem sans-serif;
  color: #707070;
  font-weight: lighter;
  margin-left: 0.625rem;
`

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: -1.1875rem;

  height: 6rem;
  background-color: #f4f4f4;

  font: italic 700 2.1875rem sans-serif;
  border: 1px solid #e2e2e2;
  color: #27c383;
`
