import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { RootState } from './store'

import Landing from './pages/Landing'
import RegistrationPage from './pages/RegistrationPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import HomePage from './pages/HomePage'
import NewBet from './pages/NewBet'

import RequireAuth from './components/RequireAuth'

const Routes: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const isLoggedIn = auth.isLoggedIn

  useEffect(() => {}, [isLoggedIn])
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
      <RequireAuth>
        <Route path="/app" component={HomePage} />
        <Route path="/new-bet" component={NewBet} />
      </RequireAuth>
    </BrowserRouter>
  )
}

export default Routes
