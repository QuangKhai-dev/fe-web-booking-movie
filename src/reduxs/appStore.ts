import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { moviesApis } from 'reduxs/slice/getMovies'
import authApis from 'reduxs/slice/auth'
import { theaterApis } from 'reduxs/slice/getTheaters'
import { theaterClusterApis } from 'reduxs/slice/getTheatersClusterAccording'
import ThemeSliceRedux from 'reduxs/redux/mode-theme.slice'
import CurrentLanguageRedux from 'reduxs/redux/current-language.slice'
import AuthRedux from 'reduxs/redux/auth.slice'

const rootReducer = combineReducers({
  [ThemeSliceRedux.name]: ThemeSliceRedux.reducer,
  [CurrentLanguageRedux.name]: CurrentLanguageRedux.reducer,
  [moviesApis.reducerPath]: moviesApis.reducer,
  [theaterApis.reducerPath]: theaterApis.reducer,
  [theaterClusterApis.reducerPath]: theaterClusterApis.reducer,
  [authApis.reducerPath]: authApis.reducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
