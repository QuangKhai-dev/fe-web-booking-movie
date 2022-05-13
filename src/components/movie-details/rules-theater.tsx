/* eslint-disable jsx-a11y/img-redundant-alt */
import { memo, useMemo } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded'
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal'

const RulesTheater = () => {
  const { t } = useTranslation()

  const rulesTheaterMovie = useMemo(
    () => [
      {
        id: 'user-mark',
        image: 'https://www.pvrcinemas.com/assets/images/covid/mask.svg',
        description: t('MOVIE_DETAILS.USER_MARK')
      },
      {
        id: 'sanitization',
        image: 'https://www.pvrcinemas.com/assets/images/covid/alcohol.svg',
        description: t('MOVIE_DETAILS.SANITIZATION')
      },
      {
        id: 'distancing',
        image: 'https://www.pvrcinemas.com/assets/images/covid/social-distancing.svg',
        description: t('MOVIE_DETAILS.DISTANCING')
      },
      {
        id: 'temperature_check',
        image: 'https://www.pvrcinemas.com/assets/images/covid/thermometer.svg',
        description: t('MOVIE_DETAILS.TEMPERATURE_CHECK')
      }
    ],
    [t]
  )

  return (
    <Fade delay={400}>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} pt={3}>
              <Stack direction="row" spacing={0.5}>
                <GppGoodRoundedIcon color="primary" />
                <Typography fontWeight={600}>{t('MOVIE_DETAILS.SAFETY')}</Typography>
              </Stack>
            </Box>
          </Grid>
          {rulesTheaterMovie.map(item => (
            <Grid item md={3} xs={6} key={item.id}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingY: 2
                }}
              >
                <Stack spacing={1}>
                  <img
                    src={item.image}
                    width={50}
                    height={50}
                    style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    alt="image"
                  />
                  <Typography fontWeight={600} textAlign="center">
                    {item.description}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  )
}

export default memo(RulesTheater)
