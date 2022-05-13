import { useEffect } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import QueryString from 'query-string'
import { Box, Stack, Typography, TextField, InputAdornment } from '@mui/material'

import { useTranslation } from 'react-i18next'
import { LoadingButton } from '@mui/lab'
import { useLocation, useNavigate } from 'react-router-dom'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import LogoComponent from 'components/layout/auth/logo.component'
import { useLoginMutation } from 'reduxs/slice/auth'
import { PAGE } from 'routes'
import { setLocalStorage } from 'utils/common'
import { KEY_LOGIN_LOCAL, REGEX } from 'utils/constants'

type InputValues = {
  userName: string
  password: string
}

const initialValues: InputValues = {
  userName: '',
  password: ''
}

const LoginPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { search: searchLocation } = useLocation()
  const { userName: userNameUrl } = QueryString.parse(searchLocation)

  const [login, { isLoading, error: userLoginError, data: userLoginSuccess }] = useLoginMutation()

  const formik = useFormik({
    initialValues,
    onSubmit: value => {
      login({
        taiKhoan: value.userName,
        matKhau: value.password
      })
    },
    validationSchema: yup.object().shape({
      userName: yup.string().required(t('INPUTS.ERROR_REQUIRED')).matches(REGEX.USER_NAME, t('INPUTS.USER_NAME')),
      password: yup.string().required(t('INPUTS.ERROR_REQUIRED')).min(8, t('INPUTS.MIN_LENGTH'))
    })
  })

  useEffect(() => {
    if (userNameUrl) formik.setFieldValue('userName', userNameUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userNameUrl])

  useEffect(() => {
    if (userLoginSuccess) setLocalStorage(KEY_LOGIN_LOCAL, userLoginSuccess)
  }, [userLoginSuccess])

  useEffect(() => {
    if (userLoginError) toast.error(t('LOGIN.LOGIN_ERROR'))
  }, [userLoginError, t])

  return (
    <Box minWidth="40%" textAlign="center">
      <LogoComponent />
      <Box minWidth="20%" p={3} borderRadius={2} sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        <Stack spacing={0.5}>
          <Typography variant="h5" color="white" fontWeight={700} textAlign="center">
            {t('LOGIN.ACCOUNT_LOGIN')}
          </Typography>
          <Typography textAlign="center" color="text.secondary">
            {t('LOGIN.DESCRIPTIONS')}
          </Typography>
        </Stack>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Stack spacing={1.5} mt={3}>
            <TextField
              name="userName"
              autoComplete="off"
              fullWidth
              value={formik.values.userName}
              helperText={formik.touched.userName && formik.errors.userName}
              error={Boolean(formik.touched.userName && formik.errors.userName)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label={t('FORM.USER_NAME')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRoundedIcon color="primary" fontSize="small" />
                  </InputAdornment>
                )
              }}
              margin="none"
            />
            <TextField
              autoComplete="off"
              fullWidth
              name="password"
              type="password"
              label={t('FORM.PASSWORD')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsRoundedIcon color="primary" fontSize="small" />
                  </InputAdornment>
                )
              }}
              margin="none"
              value={formik.values.password}
              helperText={formik.touched.password && formik.errors.password}
              error={Boolean(formik.touched.password && formik.errors.password)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <LoadingButton
              disabled={!formik.dirty}
              type="submit"
              sx={{ minHeight: '50px' }}
              loading={isLoading}
              variant="contained"
              fullWidth
            >
              {t('BUTTON.LOGIN')}
            </LoadingButton>
          </Stack>
        </form>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography color="text.secondary">{t('LOGIN.FORGOT_PASSWORD')}</Typography>
          <Typography
            onClick={() => navigate(PAGE.FORGOT_PASSWORD)}
            fontWeight={600}
            color="primary.main"
            sx={{ cursor: 'pointer' }}
            component="a"
          >
            {t('BUTTON.RESET_PASSWORD')}
          </Typography>
        </Stack>
      </Box>

      <Typography
        textAlign="center"
        fontWeight={600}
        color="primary.main"
        sx={{ cursor: 'pointer' , display:'inline-block' }}
        component="a"
        onClick={() => navigate(PAGE.REGISTER)}
        pt={2}
      >
        {t('BUTTON.REGISTER')}
      </Typography>
    </Box>
  )
}

export default LoginPage
