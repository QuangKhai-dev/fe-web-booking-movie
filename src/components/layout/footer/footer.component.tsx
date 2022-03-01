import React, { memo, useEffect, useMemo, useState } from "react"
import { Box, Stack, Typography } from "@mui/material"
import SectionContainer from "components/layout/section-container.component"
import { setLocalStorage, getLocalStorage } from "utils/common"
import { LANGUAGE, MODE_THEME } from "utils/constants/index"
import { useDispatch } from "react-redux"
import ModeThemeRedux from "reduxs/redux/mode-theme.slice"
import CurrentValueRedux from "reduxs/redux/current-language.slice"
import { useTranslation } from "react-i18next"

const FooterComponent = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const getMode = getLocalStorage(MODE_THEME)
  const getLanguage = getLocalStorage(LANGUAGE)

  const [currentTheme, setCurrentTheme] = useState<string>("")
  const [currentLanguage, setCurrentLanguage] = useState<string>("")

  const handleOnchangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentTheme(e.target.value)
    setLocalStorage(MODE_THEME, e.target.value)
    dispatch(ModeThemeRedux.actions.changesModeTheme({ theme: e.target.value }))
  }

  const handleOnchangeLanguages = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLanguage(e.target.value)
    setLocalStorage(LANGUAGE, e.target.value)
    dispatch(CurrentValueRedux.actions.changesCurrentLanguage({ language: e.target.value }))
  }

  useEffect(() => {
    if (getMode) {
      setCurrentTheme(JSON.parse(getMode))
    }
    if (getLanguage) {
      setCurrentLanguage(JSON.parse(getLanguage))
    }
  }, [getMode, getLanguage])

  const navItems = useMemo(
    () => [
      {
        id: "about",
        label: t("FOOTER.ABOUT"),
        href: "/"
      },
      {
        id: "Careers",
        label: t("FOOTER.CAREERS"),
        href: "/"
      },
      {
        id: "policy",
        label: t("FOOTER.PRIVACY_POLICY"),
        href: "/"
      },
      {
        id: "adchoices",
        label: t("FOOTER.ADCHOICES"),
        href: "/"
      },
      {
        id: "security",
        label: t("FOOTER.SECURITY"),
        href: "/"
      },
      {
        id: "data-processing",
        label: t("FOOTER.DATA_PROCESSING"),
        href: "/"
      }
    ],
    [t]
  )

  return (
    <Box
      sx={{
        backgroundColor: "#080808",
        backgroundImage:
          'url("https://s3.ap-southeast-1.amazonaws.com/files.gigantecmedia.com/ForumTradehub/footerbg_cab5b6f97c.png")',
        backgroundRepeat: "no-repeat"
      }}
      px={2}
    >
      <SectionContainer maxWidth="xl">
        <Stack justifyContent="space-between">
          <Box my={4}>
            <Stack spacing={1.5} direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <select
                  value={currentTheme}
                  onChange={handleOnchangeTheme}
                  style={{
                    background: "transparent",
                    paddingLeft: 3,
                    paddingRight: 3,
                    paddingTop: 5,
                    paddingBottom: 5,
                    color: "white",
                    borderRadius: 4,
                    cursor: "pointer"
                  }}
                >
                  <option value="dark"> 🌚 {t("MODE_THEME.DARK")}</option>
                  <option value="light"> 🌞 {t("MODE_THEME.LIGHT")}</option>
                </select>
              </Box>
              {navItems.map(item => (
                <Box key={item.id}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "rgba(163,163,163)",
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
              <Box>
                <select
                  value={currentLanguage}
                  onChange={handleOnchangeLanguages}
                  style={{
                    background: "transparent",
                    paddingLeft: 3,
                    paddingRight: 3,
                    paddingTop: 5,
                    paddingBottom: 5,
                    color: "white",
                    borderRadius: 4,
                    cursor: "pointer"
                  }}
                >
                  <option value="vi">{t("LANGUAGE.VI")}</option>
                  <option value="en"> {t("LANGUAGE.EN")}</option>
                </select>
              </Box>
            </Stack>

            <Box my={2}>
              <Typography variant="subtitle1" color="common.white" textAlign="center">
                © Booking Movie, Inc. 2021
              </Typography>
            </Box>
          </Box>
        </Stack>
      </SectionContainer>
    </Box>
  )
}
export default memo(FooterComponent)
