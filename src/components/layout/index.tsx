import React from "react"
import { Outlet } from "react-router-dom"
import { Paper, Toolbar, Box } from "@mui/material"
import HeaderComponent from "components/layout/header"
import FooterComponent from "components/layout/footer/footer.component"

const Layout: React.FC = () => {
  return (
    <Paper elevation={0} sx={{ height: "100%" }}>
      <HeaderComponent />
      <Toolbar sx={{ minHeight: "110px !important", bgcolor: "background.default" }} />
      <Box sx={{ bgcolor: "background.default" }}>
        <Outlet />
      </Box>
      <FooterComponent />
    </Paper>
  )
}
export default Layout
