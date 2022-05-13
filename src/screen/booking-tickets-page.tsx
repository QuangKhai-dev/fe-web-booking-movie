import { Container, Typography, Breadcrumbs, Link, Stack, useTheme, Box } from '@mui/material'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import CountDownTime from '../components/booking-tickets/count-down-time'
import MovieInformation from '../components/booking-tickets/movie-information'
import ShowTimeBooking from '../components/booking-tickets/show-time-booking'

const BookingTicketsPage = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Box bgcolor="background.default" minHeight="100vh">
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="space-between" py={2}>
          <Box>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                {t('COMMON.HOME_PAGE')}
              </Link>
              <Typography color="text.primary">{t('BOOKING_TICKETS.BOOK_MOVIE_TICKETS')}</Typography>
            </Breadcrumbs>
          </Box>
          <CountDownTime />
        </Stack>
        <MovieInformation />
        <ShowTimeBooking />
      </Container>
    </Box>
  )
}

export default BookingTicketsPage
