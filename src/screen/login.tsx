import * as yup from 'yup'
import { useFormik } from 'formik'
import { Box, Stack, Typography, TextField, InputAdornment, } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoComponent from 'components/layout/auth/logo.component';
import { PAGE } from 'routes'

type InputValues = {
  userName: string,
  password: string
}

const initialValues: InputValues = {
  userName: '',
  password: ''
}

const LoginPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues,
    onSubmit: (value) => {
      console.log({ value })
    },
    validationSchema: yup.object().shape({
      userName: yup.string().required(t('INPUTS.ERROR_REQUIRED')),
      password: yup.string().required(t('INPUTS.ERROR_REQUIRED'))
    })
  })

  return (
    <Box minWidth="40%" textAlign='center'>
      <LogoComponent />
      <Box
        minWidth="20%"
        p={3}
        bgcolor="white"
        borderRadius={2}
        sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <Stack spacing={0.5}>
          <Typography variant='h5' fontWeight={700} textAlign="center">
            {t('LOGIN.ACCOUNT_LOGIN')}
          </Typography>
          <Typography textAlign="center">
            {t('LOGIN.DESCRIPTIONS')}
          </Typography>
        </Stack>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={1.5} mt={3}>
            <TextField
              name="userName"
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
                    <PersonRoundedIcon color='primary' fontSize='small' />
                  </InputAdornment>
                ),
              }}
              margin="none"
            />
            <TextField
              fullWidth
              name="password"
              type="password"
              label={t('FORM.PASSWORD')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsRoundedIcon color='primary' fontSize='small' />
                  </InputAdornment>
                ),
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
              type="submit" sx={{ minHeight: '50px' }} loading={false} variant='contained' fullWidth>
              {t('BUTTON.LOGIN')}
            </LoadingButton>
          </Stack>
        </form>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography color="text.disabled">
            {t('LOGIN.FORGOT_PASSWORD')}
          </Typography>
          <Typography
            onClick={() => navigate(PAGE.FORGOT_PASSWORD)}
            fontWeight={600} color="primary.main" sx={{ cursor: 'pointer' }} component='a'>
            {t('BUTTON.RESET_PASSWORD')}
          </Typography>
        </Stack>
      </Box>
      <Typography textAlign="center" fontWeight={600} color="primary.main" sx={{ cursor: 'pointer' }} component='a'
        onClick={() => navigate(PAGE.REGISTER)}
        pt={2}>
        {t('BUTTON.REGISTER')}
      </Typography>
    </Box >
  )
}

export default LoginPage