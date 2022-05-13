import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'reduxs/hooks'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Divider
} from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded'

import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import { PAGE } from 'routes'
import { KEY_LOGIN_LOCAL } from 'utils/constants'
import { getLocalStorage } from 'utils/common'

const Header = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const getJwtLocal = getLocalStorage(KEY_LOGIN_LOCAL)
  const [currentUser, setCurrentUser] = useState(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const modeTheme = useAppSelector(state => state['mode-theme'].modeTheme)

  const navItems = useMemo(
    () => [
      {
        id: 'now-show',
        label: t('HEADER.SHOW_TIMES')
      },
      {
        id: 'cum-rap',
        label: t('HEADER.THEATERS')
      },
      {
        id: 'tin-tuc',
        label: t('COMMON.NEWS')
      }
    ],
    [t]
  )

  const handleScrollEl = (idEl: string) => {
    document.getElementById(idEl)?.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  const navigateHomepage = useCallback(() => navigate(PAGE.HOME), [navigate])

  useEffect(() => {
    if (getJwtLocal) setCurrentUser(JSON.parse(getJwtLocal))
    if (!getJwtLocal) setCurrentUser(null)
  }, [getJwtLocal])

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const handleLogout = () => {
    console.log('localStorage.removeItem(KEY_LOGIN_LOCAL)')
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.background.default, zIndex: 99 }}>
      <Toolbar sx={{ minHeight: isMobile ? '64px' : '84px', py: 1 }}>
        <Stack direction="row" alignItems={'center'} justifyContent="space-between" spacing={2} width="100%">
          <Box sx={{ cursor: 'pointer' }} onClick={navigateHomepage}>
            <img
              src={`/logo/logo-${modeTheme}.png`}
              width={110}
              height={65}
              style={{ objectFit: 'cover' }}
              alt="logo"
            />
          </Box>
          <Stack sx={{ display: { xs: 'none', md: 'flex' } }} flex={2} direction="row" spacing={3} alignItems="center">
            {navItems.map(item => (
              <Box key={item.id} onClick={() => handleScrollEl(item.id)} id={item.id}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'text.primary',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
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

          {!currentUser && (
            <Box>
              <Button variant="contained" onClick={() => navigate(PAGE.LOGIN)}>
                {t('AUTH.LOGIN')}
              </Button>
            </Box>
          )}

          {currentUser && (
            <div>
              <IconButton onClick={handleClick}>
                <Tooltip title={t('HEADER.ACCOUNT_SETTINGS') as string}>
                  <PersonRoundedIcon />
                </Tooltip>
              </IconButton>
            </div>
          )}
        </Stack>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          // onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {t('COMMON.SETTINGS')}
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HistoryEduRoundedIcon fontSize="small" />
            </ListItemIcon>
            {t('COMMON.BOOKING_HISTORY')}
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon onClick={handleLogout}>
              <Logout fontSize="small" />
            </ListItemIcon>
            {t('COMMON.LOG_OUT')}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
export default memo(Header)
