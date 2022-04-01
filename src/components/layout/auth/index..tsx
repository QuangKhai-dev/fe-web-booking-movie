
import { Box } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PAGE } from 'routes'
import { getLocalStorage } from 'utils/common'
import { KEY_LOGIN_LOCAL } from 'utils/constants'

const AuthLayout = ({ children }: { children: any }) => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const getJwtLocal = getLocalStorage(KEY_LOGIN_LOCAL)
    if (getJwtLocal) setIsAuthenticated(true)
  }, [])

  if (isAuthenticated) navigate(PAGE.HOME)

  return <Box sx={{ height: '100vh' }} bgcolor="background.default" display="flex" alignItems="center" justifyContent="center">
    {children}
  </Box>
}

export default AuthLayout