import React, { FormEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { RootState } from '../../store'
import { addNewUser } from '../../store/actions/usersActions'

import Card from '../../components/Card'
import LandingTitles from '../../components/LandingTitles'

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

const RegistrationPage: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const users = useSelector((state: RootState) => state.users)

  const [name, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submitHandler(event: FormEvent) {
    event.preventDefault()

    if (email.length === 0 || password.length === 0 || name.length === 0) {
      Swal.fire('Error', 'Preencha todos os campos', 'error')
    } else if (dispatch(addNewUser({ name, email, password }, users))) {
      Swal.fire({
        icon: 'success',
        title: 'Usuário cadastrado com sucesso',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        history.push('/')
      })
    } else {
      Swal.fire('Error', 'Usuário já existe', 'error')
    }
  }

  return (
    <Container>
      <MainContainer>
        <LandingTitles />
        <FormContainer>
          <Card type="Registration">
            <Fieldset onSubmit={submitHandler}>
              <Input
                type="name"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="name"
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
