import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import { RANDOM_MIN } from '../../utils/constants'
import { useTranslation } from 'react-i18next'
import React from 'react'

const MovieInformation = () => {
  const { t } = useTranslation()

  return (
    <Grid container spacing={4} mt={2}>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            width: '100%',
            height: 350,
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <img
            src="https://movie0706.cybersoft.edu.vn/hinhanh/fantasticfour.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={9} display="flex" alignItems="center" justifyContent="start">
        <Stack spacing={2}>
          <Typography component="h1" variant="h4" color="text.primary" fontWeight={700}>
            Batman v Superman: Dawn of Justice 1
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Box
                borderRadius={0.5}
                fontWeight={600}
                color="black"
                fontSize="12px"
                bgcolor="primary.main"
                p={0.2}
                width="fit-content"
              >
                IMDB
              </Box>
              <Typography color="text.primary" fontWeight={600}>
                9.1
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <AccessTimeFilledRoundedIcon color="primary" />
              <Typography fontWeight={600} color="common.white">
                {`${RANDOM_MIN['6']} ${t('COMMON.MIN')}`}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <FavoriteBorderIcon color="primary" />
              <Typography fontWeight={600} color="common.white">
                {`5k`}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <EventAvailableRoundedIcon color="primary" />
              <Typography fontWeight={600} color="common.white">
                22/3/20212 - 21:00 AM
              </Typography>
            </Stack>
          </Stack>
          <Box>
            <Button
              variant="outlined"
              // onClick={handleViewTrailer}
              startIcon={<PlayArrowRoundedIcon color="primary" />}
            >
              Trailer
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default MovieInformation
