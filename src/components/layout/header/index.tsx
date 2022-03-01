import { memo, useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useAppSelector } from "reduxs/hooks"
import { useNavigate } from "react-router-dom"
import { AppBar, Box, Button, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { PAGE } from "routes"

const Header = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const modeTheme = useAppSelector(state => state["mode-theme"].modeTheme)

  const navItems = useMemo(
    () => [
      {
        id: "lich-chieu",
        label: t("HEADER.SHOW_TIMES")
      },
      {
        id: "cum-rap",
        label: t("HEADER.THEATERS")
      },
      {
        id: "tin-tuc",
        label: t("COMMON.NEWS")
      }
    ],
    [t]
  )

  const handleScrollEl = (id: string) => {
    const elmt = document.getElementById("tin-tuc")
    elmt?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const navigateHomepage = useCallback(() => navigate(PAGE.HOME), [navigate])

  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.background.default, zIndex: 99 }}>
      <Toolbar sx={{ minHeight: isMobile ? "64px" : "84px", py: 1 }}>
        <Stack direction="row" alignItems={"center"} justifyContent="space-between" spacing={2} width="100%">
          <Box sx={{ cursor: 'pointer' }} onClick={navigateHomepage}>
            <img
              src={`/logo/logo-${modeTheme}.png`}
              width={110}
              height={65}
              style={{ objectFit: "cover" }}
              alt="logo"
            />
          </Box>
          <Stack sx={{ display: { xs: "none", md: "flex" } }} flex={2} direction="row" spacing={3} alignItems="center">
            {navItems.map(item => (
              <Box key={item.id} onClick={() => handleScrollEl(item.id)} id={item.id}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "text.primary",
                    transition: "all 0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      color: theme => theme.palette.primary.main
                    },
                    fontWeight: 600
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
            {/* <SearchComponent /> */}
          </Stack>
          <Box>
            <Button variant="contained" onClick={() => navigate(PAGE.LOGIN)}>{t("AUTH.LOGIN")}</Button>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
export default memo(Header)
