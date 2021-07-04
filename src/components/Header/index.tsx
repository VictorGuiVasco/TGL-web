import React from 'react'

import { Button, ButtonTGL, Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <ButtonTGL to='/app' >TGL</ButtonTGL>
      </div>

      <nav>
        <Button to='/app' >Account</Button>
        <Button to='/app' >Log Out     &rarr;</Button>
      </nav>
    </Container>
  )
}

export default Header
