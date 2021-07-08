import React, { useEffect, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'

interface Props {
  children: ReactNode
}

const RequireAuth: React.FC<Props> = ({ children }) => {
  const history = useHistory()
  const auth = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!auth.isLoggedIn) {
      history.push('/')
    }
  }, [auth, history])

  return <>{children}</>
}

export default RequireAuth
