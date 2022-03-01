import { memo } from "react"
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PAGE } from "routes"

const LogoComponent = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ cursor: 'pointer' }} mb={2}>
      <img
        src={`/logo/logo-light.png`}
        onClick={() => navigate(PAGE.HOME)}
        width={140}
        height={80}
        style={{ objectFit: "cover" }}
        alt="logo"
      />
    </Box>
  )
}

export default memo(LogoComponent)