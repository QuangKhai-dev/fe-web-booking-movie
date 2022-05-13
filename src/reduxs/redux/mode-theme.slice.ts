import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getLocalStorage } from 'utils/common'
import { MODE_THEME } from 'utils/constants'

const theme = getLocalStorage(MODE_THEME)

type StateType = {
  modeTheme: string
}

const initialState: StateType = {
  modeTheme: theme ? JSON.parse(theme) : 'dark'
}

const slice = createSlice({
  name: 'mode-theme',
  initialState,
  reducers: {
    changesModeTheme: (state, _action: PayloadAction<{ theme: string }>) => ({
      ...state,
      modeTheme: state.modeTheme === _action.payload.theme ? state.modeTheme : _action.payload.theme
    })
  }
})

export default slice
