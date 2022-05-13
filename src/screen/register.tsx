import * as yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Box, Stack, Typography, TextField, Grid, InputAdornment } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded'
import MailRoundedIcon from '@mui/icons-material/MailRounded'
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded'

import { PAGE } from 'routes'
import { REGEX } from 'utils/constants'
import { useRegisterMutation } from 'reduxs/slice/auth'
import LogoComponent from 'components/layout/auth/logo.component'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

type InputValues = {
  userName: string
  password: string
  email: string
  phone: string
  idGroup: string
  fullName: string
  confirmPassword: string
}
const initialValues: InputValues = {
  userName: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: '',
  idGroup: 'GP08',
  fullName: 'string'
}

type MessageError = {
  data?: string
  status?: string
  originalStatus?: number
}

const RegisterPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [messageError, setMessageError] = useState<MessageError | any>(null)

  let timer: ReturnType<typeof setTimeout>
  const [register, { isLoading, error: userRegisterError, isSuccess, data }] = useRegisterMutation()

  const formik = useFormik({
    initialValues,
    onSubmit: async (value: InputValues) => {
      await register({
        maNhom: value.idGroup,
        taiKhoan: value.userName,
        email: value.email,
        hoTen: value.fullName,
        soDt: value.phone,
        matKhau: value.password,
        maLoaiNguoiDung: 'KhachHang'
      })
      if (isSuccess)
        navigate({
          pathname: PAGE.LOGIN,
          search: `?userName=${value.userName}`
        })
    },
    validationSchema: yup.object().shape({
      fullName: yup.string().required(t('INPUTS.ERROR_REQUIRED')),
      userName: yup.string().required(t('INPUTS.ERROR_REQUIRED')).matches(REGEX.USER_NAME, t('INPUTS.USER_NAME')),
      password: yup
        .string()
        .required(t('INPUTS.ERROR_REQUIRED'))
        .min(8, t('INPUTS.SHORTER_PASSWORD'))
        .max(20, t('INPUTS.LONGER_PASSWORD')),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], t('INPUTS.CONFIRM_PASSWORD'))
        .required(t('INPUTS.ERROR_REQUIRED')),
      email: yup.string().required(t('INPUTS.ERROR_REQUIRED')).email('INPUTS.EMAIL_INVALIDATE'),
      phone: yup.string().required(t('INPUTS.ERROR_REQUIRED')).matches(REGEX.PHONE, t('INPUTS.PHONE_INVALIDATE'))
    })
  })

  useEffect(() => {
    if (userRegisterError) setMessageError(userRegisterError)
  }, [userRegisterError, t])

  useEffect(() => {
    if (isSuccess && data) {
      toast.success(t('REGISTER.REGISTER_SUCCESS'))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setTimeout(() => {
        navigate({
          pathname: PAGE.LOGIN,
          search: `?userName=${data.taiKhoan}`
        })
      }, 2000)
    }
    return () => clearTimeout(timer)
  }, [data, isSuccess, navigate])

  useEffect(() => {
    if (messageError) toast.error(messageError?.data || t('REGISTER.REGISTER_ERROR'))
  }, [messageError, t])

  return (
    <Box minWidth="40%" textAlign="center">
      <LogoComponent />
      <Box minWidth="20%" p={3} borderRadius={2} sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        <Stack spacing={0.5} textAlign="center">
          <Typography variant="h5" color="white" fontWeight={700} textAlign="center">
            {t('REGISTER.CREATE')}
            <span style={{ fontSize: '35px' }}>.</span>
          </Typography>
          <Stack alignItems="center" justifyContent="center">
            <Stack direction="row" spacing={0.5}>
              <Typography textAlign="center" color="white">
                {t('REGISTER.ALREADY_ACCOUNT')}
              </Typography>
              <Typography
                textAlign="center"
                fontWeight={600}
                color="primary.main"
                sx={{ cursor: 'pointer' }}
                component="a"
                onClick={() => navigate(PAGE.LOGIN)}
              >
                {t('BUTTON.LOGIN')}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Stack spacing={1.5} mt={2}>
            <TextField
              name="fullName"
              fullWidth
              label={t('FORM.FULL_NAME')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxRoundedIcon color="primary" fontSize="small" />
                  </InputAdornment>
                )
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.fullName && formik.errors.fullName}
              error={Boolean(formik.errors.fullName && formik.touched.fullName)}
              margin="none"
            />
            <TextField
              name="email"
              fullWidth
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailRoundedIcon color="primary" fontSize="small" />
                  </InputAdornment>
                )
              }}
              margin="none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
              error={Boolean(formik.errors.email && formik.touched.email)}
            />
            <TextField
              name="phone"
              fullWidth
              label={t('FORM.PHONE')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactPhoneRoundedIcon color="primary" fontSize="small" />
                  </InputAdornment>
                )
              }}
              margin="none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.phone && formik.errors.phone}
              error={Boolean(formik.errors.phone && formik.touched.phone)}
            />
            <TextField
              name="userName"
              fullWidth
              label={t('FORM.USER_NAME')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRoundedIcon color="primary" fontSize="small" />
                  </InputAdornment>
                )
              }}
              margin="none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.userName && formik.errors.userName}
              error={Boolean(formik.errors.userName && formik.touched.userName)}
            />
            <Box>
              <Grid container spacing={1.5}>
                <Grid item xs={12} md={6}>
                  <TextField
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.password && formik.errors.password}
                    error={Boolean(formik.errors.password && formik.touched.password)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="confirmPassword"
                    type="password"
                    label={t('FORM.CONFIRM_PASSWORD')}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HttpsRoundedIcon color="primary" fontSize="small" />
                        </InputAdornment>
                      )
                    }}
                    margin="none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    error={Boolean(formik.errors.confirmPassword && formik.touched.confirmPassword)}
                  />
                </Grid>
              </Grid>
            </Box>
            <LoadingButton
              disabled={!formik.dirty}
              type="submit"
              sx={{ minHeight: '50px' }}
              loading={isLoading}
              variant="contained"
              fullWidth
            >
              {t('BUTTON.CREATE_ACCOUNT')}
            </LoadingButton>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default RegisterPage
