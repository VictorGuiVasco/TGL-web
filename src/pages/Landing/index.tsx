import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { saveUser } from '../../store/actions/usersActions'

import Card from '../../components/Card'
import LandingTitles from '../../components/LandingTitles'

import Swal from 'sweetalert2'

import Cookies from 'universal-cookie'
import api from '../../services/api'

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
  const history = useHistory()
  const dispatch = useDispatch()
  const cookies = new Cookies()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submitHandler(event: FormEvent) {
    event.preventDefault()

    if (email.length === 0 || password.length === 0) {
      Swal.fire('Error', 'Preencha todos os campos', 'error')
      return
    }

    api
      .post('session', { email, password })
      .then((response) => response.data)
      .then((data) => {
        cookies.set('token', data.token, { path: '/' })
        dispatch(saveUser())
        Swal.fire({
          title: 'Seja bem vindo',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          history.push('/app')
        })
      })
      .catch(() => {
        Swal.fire('Error', 'Dados de login errados', 'error')
      })
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
