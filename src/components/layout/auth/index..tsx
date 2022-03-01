
import { Box } from '@mui/material'
import { blue } from '@mui/material/colors'

const AuthLayout = ({ children }: { children: any }) => {
  return <Box sx={{ backgroundColor: blue[50], height: '100vh' }} display="flex" alignItems="center" justifyContent="center">
    {children}
  </Box>
}

export default AuthLayout