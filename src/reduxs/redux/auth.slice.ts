import { createSlice } from '@reduxjs/toolkit'
import { KEY_LOGIN_LOCAL } from '../../utils/constants'

type StateType = {
  isAuthenticated: boolean
}

const initialState: StateType = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogined: state => ({
      ...state,
      isAuthenticated: true
    }),
    userLogout: state => {
      localStorage.removeItem(KEY_LOGIN_LOCAL)
      state.isAuthenticated = false
    }
  }
})

export default authSlice
