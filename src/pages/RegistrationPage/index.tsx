import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router'

import Card from '../../components/Card'
import LandingTitles from '../../components/LandingTitles'

import Swal from 'sweetalert2'

import api from '../../services/api'

import {
  Button,
  Container,
  Fieldset,
  FormContainer,
  Footer,
  Input,
  MainContainer,
  SubmitButton,
} from '../../assets/styles/global'

const RegistrationPage: React.FC = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submitHandler(event: FormEvent) {
    event.preventDefault()

    if (email.length === 0 || password.length === 0 || username.length === 0) {
      Swal.fire('Error', 'Preencha todos os campos', 'error')
      return
    }

    api
      .post('users', {
        username,
        email,
        password,
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Cadastro realizado com sucesso',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          history.push('/')
        })
      })
      .catch(() => {
        Swal.fire('Error', 'Usuário ja existe', 'error')
      })
  }

  return (
    <Container>
      <MainContainer>
        <LandingTitles />
        <FormContainer>
          <Card type="Registration">
            <Fieldset onSubmit={submitHandler}>
              <Input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
              />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
              <Input
                type="password"
                value={password}
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />

              <SubmitButton>Register &rarr;</SubmitButton>
            </Fieldset>
          </Card>

          <Button to="/">&larr; Back</Button>
        </FormContainer>
      </MainContainer>

      <Footer>
        <p>Copyright 2021 Luby Software</p>
      </Footer>
    </Container>
  )
}

export default RegistrationPage
