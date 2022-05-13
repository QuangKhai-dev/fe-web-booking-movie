import React, { FC, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Card, CardMedia, Box, Typography, Stack, Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'

import { Movie } from 'interfaces'
import { RANDOM_FAVORITE, RANDOM_MIN } from 'utils/constants'

import useStyles from 'components/movies/index.styled'
import TrailerModal from 'components/trailer/modal-trailer.component'

type Props = {
  movie?: Movie
}

const MovieItemComponent: FC<Props> = ({ movie }) => {
  const styles = useStyles()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [openTrailer, setOpenTrailer] = useState(false)

  const minRandom = Math.floor(Math.random() * 9 + 1).toString()
  const favoriteRandom = Math.floor(Math.random() * 9 + 1).toString()

  const handleViewDetail = () => navigate(`/movie/${movie?.maPhim}?favorite=${favoriteRandom}&min=${minRandom}`)
  const handleViewTrailer = useCallback(() => setOpenTrailer(true), [])
  const handleCloseTrailerModal = useCallback(() => setOpenTrailer(false), [])

  return (
    <React.Fragment>
      <Card sx={{ display: 'flex' }}>
        <Box className={styles.cardContainer}>
          <CardMedia component="img" className={styles.thumbnail} src={movie?.hinhAnh} alt={movie?.biDanh} />

          <Stack spacing={4} className={styles.boxOverlay}>
            <Stack spacing={0.2} className={styles.titleContent}>
              <Typography variant="h6" fontWeight={700} color="common.white">
                {movie?.tenPhim}
              </Typography>

              <Stack>
                <Typography variant="subtitle2" fontWeight={500} color="common.white">
                  {minRandom && `${RANDOM_MIN[minRandom]} ${t('COMMON.MIN')} - 9.1 IMDb`}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1} className={styles.btnAction}>
              <Button variant="contained" onClick={handleViewDetail}>
                {t('COMMON.BOOKING_TICKETS')}
              </Button>
              <Button
                variant="outlined"
                onClick={handleViewTrailer}
                startIcon={<PlayArrowRoundedIcon color="primary" />}
              >
                Trailer
              </Button>
            </Stack>
          </Stack>
          <Box className={styles.favorite}>
            <Stack direction="row" spacing={0.2} alignItems="center">
              <FavoriteBorderIcon color="primary" fontSize="small" />
              <Typography color="primary.main" fontWeight={600}>
                {favoriteRandom && RANDOM_FAVORITE[favoriteRandom]}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Card>
      <TrailerModal open={openTrailer} onClose={handleCloseTrailerModal} urlTrailer={movie?.trailer as string} />
    </React.Fragment>
  )
}

export default MovieItemComponent
