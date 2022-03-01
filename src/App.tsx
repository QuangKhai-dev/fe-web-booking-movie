import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ThemeProvider } from "@mui/material"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { themeDark, themeLight } from "styles/theme"
import "./i18n"
import { useAppSelector } from "reduxs/hooks"
import MovieDetail from "screen/movie-detail"
import LoadingComponent from "components/loadings"
import AuthLayout from "components/layout/auth/index."

const HomePage = React.lazy(() => import("screen/home-page"))
const Layout = React.lazy(() => import("components/layout"))
const LoginPage = React.lazy(() => import("screen/login"))
const RegisterPage = React.lazy(() => import("screen/register"))

function App() {
  const { i18n } = useTranslation()

  const theme = useAppSelector(state => state["mode-theme"].modeTheme)
  const currentLanguage = useAppSelector(state => state["current-language"].currentLanguage)

  useEffect(() => {
    i18n.changeLanguage(currentLanguage || "vi")
  }, [currentLanguage, i18n])

  return (
    <ThemeProvider theme={theme === "dark" ? themeDark : themeLight}>
      <Router>
        <Routes>
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
          </Route>
          <Route path="/login" element={
            <React.Suspense fallback={<LoadingComponent />}>
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            </React.Suspense>
          } />
          <Route path="/register" element={
            <React.Suspense fallback={<LoadingComponent />}>
              <AuthLayout>
                <RegisterPage />
              </AuthLayout>
            </React.Suspense>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
