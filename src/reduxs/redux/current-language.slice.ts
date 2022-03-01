import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getLocalStorage} from 'utils/common'
import { LANGUAGE } from 'utils/constants'

const language = getLocalStorage(LANGUAGE)

type StateType = {
  currentLanguage:string
}

const initialState : StateType={
  currentLanguage:language ? JSON.parse(language) : 'vi'
}

const slice = createSlice({
  name:'current-language',
  initialState,
  reducers:{
    changesCurrentLanguage:(state , _action: PayloadAction<{ language :string}>)=>({
      ...state,
      currentLanguage: state.currentLanguage === _action.payload.language ?   state.currentLanguage: _action.payload.language
    })
  }
})

export default slice