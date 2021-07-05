import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  height: 4.6875rem;
  padding: 0 12.5rem 0 8.125rem;

  border-bottom: 0.125rem solid #ebebeb;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    padding: 0 6rem;
  }
`

export const Button = styled(Link)`
  text-align: center;
  font: italic 700 1.25rem sans-serif;
  color: #707070;

  &:first-child {
    margin-right: 2.5rem;
  }
`

export const ButtonTGL = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.75rem;
  height: 4.6875rem;
  position:relative;
  
  &::before {
    content: '';
    width: 107px;
    height: 0.4375rem;
    background-color: #b5c401;
    border-radius: 6px;
    position:absolute;
    bottom: -0.21875rem;
  }
`
