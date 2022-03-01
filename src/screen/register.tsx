import * as yup from 'yup'
import { Box, Stack, Typography, TextField, Grid, InputAdornment } from "@mui/material"
import { LoadingButton } from "@mui/lab";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';

import LogoComponent from 'components/layout/auth/logo.component';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PAGE } from "routes";
import { useFormik } from "formik";

const RegisterPage = () => {

  const navigate = useNavigate()
  const { t } = useTranslation()

  const formik = useFormik({
    initialValues: {

    },
    onSubmit: (value) => {

    },
    validationSchema: yup.object().shape({

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
        <Stack spacing={0.5} textAlign="center">
          <Typography variant='h5' fontWeight={700} textAlign="center">
            {t('REGISTER.CREATE')}
            <span style={{ fontSize: '35px' }}>.</span>
          </Typography>
          <Stack alignItems="center" justifyContent="center">
            <Stack direction="row" spacing={0.5}>
              <Typography textAlign="center">
                {t('REGISTER.ALREADY_ACCOUNT')}
              </Typography>
              <Typography
                textAlign="center"
                fontWeight={600}
                color="primary.main"
                sx={{ cursor: 'pointer' }}
                component='a'
                onClick={() => navigate(PAGE.LOGIN)}>
                {t('BUTTON.LOGIN')}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <form>
          <Stack spacing={1.5} mt={2}>
            <TextField
              name="userName"
              fullWidth
              label={t('FORM.FULL_NAME')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxRoundedIcon color='primary' fontSize='small' />
                  </InputAdornment>
                ),
              }}
              margin="none"
            />
            <TextField
              name="email"
              fullWidth
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailRoundedIcon color='primary' fontSize='small' />
                  </InputAdornment>
                ),
              }}
              margin="none"
            />
            <TextField
              name="phone"
              fullWidth
              label={t('FORM.PHONE')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactPhoneRoundedIcon color='primary' fontSize='small' />
                  </InputAdornment>
                ),
              }}
              margin="none"
            />
            <TextField
              name="userName"
              fullWidth
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
                          <HttpsRoundedIcon color='primary' fontSize='small' />
                        </InputAdornment>
                      ),
                    }}
                    margin="none"
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
                          <HttpsRoundedIcon color='primary' fontSize='small' />
                        </InputAdornment>
                      ),
                    }}
                    margin="none"
                  />
                </Grid>
              </Grid>
            </Box>
            <LoadingButton
              disabled={!formik.dirty}
              sx={{ minHeight: '50px' }} loading={false} variant='contained' fullWidth>
              {t('BUTTON.CREATE_ACCOUNT')}
            </LoadingButton>
          </Stack>
        </form>
      </Box>
    </Box >
  )
}

export default RegisterPage