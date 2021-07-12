import React from 'react'
import { Location } from 'history'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { authActions } from '../../store/slices/authSlice'

import { Button, ButtonTGL, Container } from './styles'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation<Location>()

  function logoutHandler() {
    dispatch(authActions.logout())
  }

  return (
    <Container>
      <div>
        <ButtonTGL to="/app">TGL</ButtonTGL>
        {location.pathname !== '/app' && <Button to="/app">Home</Button>}
      </div>

      <nav>
        {location.pathname !== '/account' && (
          <Button to="/account">Account</Button>
        )}

        <Button to="/" onClick={logoutHandler}>
          Log Out &rarr;
        </Button>
      </nav>
    </Container>
  )
}

export default Header
