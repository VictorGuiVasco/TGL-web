import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import RegistrationPage from './pages/RegistrationPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import HomePage from './pages/HomePage'
import NewBet from './pages/NewBet'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/registration' component={RegistrationPage} />
      <Route path='/reset-password' component={ResetPasswordPage} />
      <Route path='/app' component={HomePage} />
      <Route path='/new-bet' component={NewBet} />
    </BrowserRouter>
  )
}

export default Routes;