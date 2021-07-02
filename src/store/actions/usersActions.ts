import { usersAction } from '../slices/usersSlice'

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
