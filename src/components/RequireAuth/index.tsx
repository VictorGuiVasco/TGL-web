import React, { useEffect, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'

import Cookies from 'universal-cookie'

interface Props {
  children: ReactNode
}

const RequireAuth: React.FC<Props> = ({ children }) => {
  const cookies = new Cookies()
  const history = useHistory()
  const token = cookies.get('token')

  useEffect(() => {
    if (!!token) {
      history.push('/')
    }
  }, [history, token])

  return <>{children}</>
}

export default RequireAuth
