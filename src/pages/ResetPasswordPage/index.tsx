import React, { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

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
  Input,
  MainContainer,
  SubmitButton,
} from '../../assets/styles/global'

const ResetPasswordPage: React.FC = () => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const data = useSelector((state: RootState) => state.users)

  function submitHandler(event: FormEvent) {
    event.preventDefault()

    const existingUser = data.find((elem) => elem.email === email)
    if (email.length === 0) {
      Swal.fire('Error', 'Preencha todos os campos', 'error')
    } else if (existingUser) {
      Swal.fire({
        icon: 'success',
        title: 'Email enviado',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        history.push('/')
      })
    } else {
      Swal.fire('Error', 'Usuário não encontrado', 'error')
    }
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
