import { usersAction } from '../slices/usersSlice'
import { authActions } from '../slices/authSlice'

import { AppDispatch } from '../'

interface UsersProps {
  name: string
  email: string
  password: string
}

export function addNewUser(data: UsersProps, users: Array<UsersProps>) {
  return function (dispatch: AppDispatch) {
    const existingUser = users.find((elem) => elem.email === data.email)
    if (!existingUser) {
      dispatch(usersAction.createNewUser(data))
      return true
    } else {
      return false
    }
  }
}

export function updateUser(data: UsersProps, users: Array<UsersProps>) {
  return function (dispatch: AppDispatch) {
    const existingUser = users.find((elem) => elem.email === data.email)
    if (!existingUser) {
      dispatch(usersAction.updateUser(data))
      dispatch(authActions.login(data))
      return true
    } else {
      return false
    }
  }
}
