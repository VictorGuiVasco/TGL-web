import React, { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
/* import { useHistory } from 'react-router' */

import Card from '../../components/Card'
import LandingTitles from '../../components/LandingTitles'

import { RootState } from '../../store'
import Swal from 'sweetalert2'

import {
  Button,
  Container,
  Fieldset,
  FormContainer,
  Footer,
  ForgotInput,
  Input,
  MainContainer,
  SubmitButton,
} from '../../assets/styles/global'

const Landing: React.FC = () => {
  /* const history = useHistory() */

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const data = useSelector((state: RootState) => state.users)

  function submitHandler(event: FormEvent) {
    event.preventDefault()

    const existingUser = data.find((elem) => {
      if (elem.email === email) return elem
      else return elem.email === email
    })

    if (email.length === 0 || password.length === 0) {
      Swal.fire('Error', 'Preencha todos os campos', 'error')
    } else if (existingUser) {
      if (existingUser.password === password)
        Swal.fire('Bem Vindo', 'Log In', 'success')
      else Swal.fire('Error', 'Senha incorreta', 'error')
    } else {
      Swal.fire('Error', 'Usuário não encontrado', 'error')
    }
  }

  return (
    <Container>
      <MainContainer>
        <LandingTitles />
        <FormContainer>
          <Card type="Authentication">
            <Fieldset onSubmit={submitHandler}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <ForgotInput to="/reset-password">
                I forgot my password
              </ForgotInput>
              <SubmitButton>Sign In &rarr;</SubmitButton>
            </Fieldset>
          </Card>

          <Button to="/registration">Sign Up &rarr;</Button>
        </FormContainer>
      </MainContainer>

      <Footer>
        <p>Copyright 2021 Luby Software</p>
      </Footer>
    </Container>
  )
}

export default Landing