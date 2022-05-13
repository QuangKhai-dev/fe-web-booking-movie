import React, { useEffect, createContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { themeDark, themeLight } from 'styles/theme'
import './i18n'
import { useAppSelector } from 'reduxs/hooks'
import MovieDetail from 'screen/movie-detail'
import LoadingComponent from 'components/loadings'
import AuthLayout from 'components/layout/auth/index.'

const HomePage = React.lazy(() => import('screen/home-page'))
const Layout = React.lazy(() => import('components/layout'))
const LoginPage = React.lazy(() => import('screen/login'))
const RegisterPage = React.lazy(() => import('screen/register'))
const NewsPage = React.lazy(() => import('screen/news'))
const NewsPageDetail = React.lazy(() => import('screen/news/article'))

const BookingTicketsPage = React.lazy(() => import('screen/booking-tickets-page'))

function App() {
  const { i18n } = useTranslation()

  const theme = useAppSelector(state => state['mode-theme'].modeTheme)
  const currentLanguage = useAppSelector(state => state['current-language'].currentLanguage)

  useEffect(() => {
    i18n.changeLanguage(currentLanguage || 'vi')
  }, [currentLanguage, i18n])

  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <Router>
        <Routes>
          <Route
            path="/booking-tickets/:id"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <BookingTicketsPage />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <AuthLayout>
                  <LoginPage />
                </AuthLayout>
              </React.Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <AuthLayout>
                  <RegisterPage />
                </AuthLayout>
              </React.Suspense>
            }
          />

          <Route
            path="/"
            element={
              <React.Suspense fallback={<LoadingComponent />}>
                <Layout />
              </React.Suspense>
            }
          >
            <Route
              index
              element={
                <React.Suspense fallback={<LoadingComponent />}>
                  <HomePage />
                </React.Suspense>
              }
            />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsPageDetail />} />
          </Route>
        </Routes>
      </Router>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff'
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black'
            }
          }
        }}
      />
    </ThemeProvider>
  )
}

export default App
