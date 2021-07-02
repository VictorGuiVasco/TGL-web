import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  flex: 1;

  background: #f7f7f7;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    margin: 5rem 0 2rem;
  }
`

export const Fieldset = styled.form`
  display: flex;
  flex-direction: column;
  width: 22rem;

  align-items: center;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    margin: 5rem 0 0;
  }
`

export const Input = styled.input`
  background: transparent;
  width: 100%;

  padding: 2.125rem 0 1.65625rem 1.875rem;
  border: 0;
  border-radius: 14px 14px 0 0;
  border-bottom: 2px solid #ebebeb;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9D9D9D;
    text-transform: capitalize;
  }
}
`

export const ForgotInput = styled(Link)`
  width: fit-content;
  background: transparent;

  border: 0;

  margin: 1.65625rem 1.6875rem 0.65625rem 0;
  align-self: flex-end;

  font: italic 400 1.065rem sans-serif;
  color: #C1C1C1;
`

export const SubmitButton = styled.button`
  width: fit-content;
  margin: 2.09375rem 0 2.3125rem;

  background: transparent;
  border: 0;
  font: italic 700 2.1875rem sans-serif;
  color: #B5C401;
  text-align: center;
`

export const Button = styled(Link)`
  width: fit-content;
  margin: 0;

  background: transparent;
  border: 0;
  font: italic 700 2.1875rem sans-serif;
  color: #707070;

  text-align: center;
`

export const Footer = styled.footer`
  display: flex;

  justify-content: center;
  align-items: center;

  border-top: 2px solid #ebebeb;

  p {
    margin: 1.875rem 0;
    font: 400 0.9375rem sans-serif;
    color: #707070;
  }
`
