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

const ResetPasswordPage: React.FC = () => {
  const history = useHistory()

  const [email, setEmail] = useState('')

  function submitHandler(event: FormEvent) {
    event.preventDefault()

    if (email.length === 0) {
      Swal.fire('Error', 'Preencha todos os campos', 'error')
      return
    }

    api
      .post('password', {
        email,
        redirect_url: 'http://localhost:3000',
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Email enviado',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          history.push('/')
        })
      })
      .catch((error) => {
        Swal.fire('Error', 'Email invalido', 'error')
      })
  }

  return (
    <Container>
      <MainContainer>
        <LandingTitles />
        <FormContainer>
          <Card type="Reset password">
            <Fieldset onSubmit={submitHandler}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
              <SubmitButton>Send Link &rarr;</SubmitButton>
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

export default ResetPasswordPage
