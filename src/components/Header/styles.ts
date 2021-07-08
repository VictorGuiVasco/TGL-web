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

export const ButtonTGL = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 4.625rem;

  text-align: center;
  font: italic 700 2.75rem sans-serif;
  color: #707070;
  height: 4.6875rem;
  position:relative;

  @media(max-width: 800px){
    margin-right: 2.5rem;
  }
  
  &::before {
    content: '';
    width: 6.6875rem;
    height: 0.4375rem;
    background-color: #b5c401;
    border-radius: 6px;
    position:absolute;
    bottom: -0.21875rem;
  }
`
