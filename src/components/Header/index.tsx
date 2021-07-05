import React from 'react'

import { Button, ButtonTGL, Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <ButtonTGL to='/' >TGL</ButtonTGL>
      </div>

      <nav>
        <Button to='/app' >Account</Button>
        <Button to='/' >Log Out     &rarr;</Button>
      </nav>
    </Container>
  )
}

export default Header
