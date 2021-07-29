import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveUser } from '../../store/actions/usersActions'

import Header from '../../components/Header'
import Card from '../../components/Card'

import Swal from 'sweetalert2'

import Cookies from 'universal-cookie'
import api from '../../services/api'

import {
  Container,
  Fieldset,
  Footer,
  Input,
  SubmitButton,
} from '../../assets/styles/global'

import { Main, UserDataText } from './styles'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

const AccountPage: React.FC = () => {
  const cookies = new Cookies()
  const dispatch = useDispatch()

  const users = useSelector((state: RootState) => state.users)

  const [name, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const config = {
    headers: {
      Authorization: `Bearer ${cookies.get('token')}`,
    },
  }

  let userData
  useEffect(() => {}, [userData])

  function submitHandler(event: FormEvent) {
    event.preventDefault()

    const data = {
      username: !!name ? name : users?.username,
      email: !!email ? email : users?.email,
    }
    console.log(data)

    api
      .put(`users/${users?.id}`, data, config)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        console.log(`users/${users?.id}`)
        dispatch(saveUser())
        Swal.fire('Dados atualizados')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Container>
      <Header />
      <Main>
        <UserDataText>Nome: {users?.username}</UserDataText>
        <UserDataText>Email: {users?.email}</UserDataText>
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
