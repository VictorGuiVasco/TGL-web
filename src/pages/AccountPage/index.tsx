import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../components/Header'
import Card from '../../components/Card'

import Swal from 'sweetalert2'

import { updateUser } from '../../store/actions/usersActions'
import { RootState } from '../../store'

import {
  Container,
  Fieldset,
  Footer,
  Input,
  SubmitButton,
} from '../../assets/styles/global'

import { Main, UserDataText } from './styles'

interface UsersProps {
  name: string
  email: string
  password: string
}

const AccountPage: React.FC = () => {
  const data = useSelector((state: RootState) => state.auth)
  const users = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()

  let userData
  useEffect(() => {
    userData = data.user
    console.log(data, users)
  }, [userData])

  const [name, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submitHandler(event: FormEvent) {
    event.preventDefault()
    if (email.length === 0 || password.length === 0 || name.length === 0) {
      Swal.fire('Error', 'Preencha todos os campos', 'error')
    } else {
      dispatch(updateUser({ name, email, password }, users))
      Swal.fire('Dados atualizados')
    }
  }

  return (
    <Container>
      <Header />
      <Main>
        <UserDataText>Nome: {data.user?.name}</UserDataText>
        <UserDataText>Email: {data.user?.email}</UserDataText>
        <UserDataText>Senha: {data.user?.password}</UserDataText>
        <Card type="Mudar dados">
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <SubmitButton>Save &rarr;</SubmitButton>
          </Fieldset>
        </Card>
      </Main>
      <Footer>
        <p>Copyright 2021 Luby Software</p>
      </Footer>
    </Container>
  )
}

export default AccountPage
