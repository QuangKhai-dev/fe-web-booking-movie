
import { memo, useCallback, useState } from "react"
import { format } from "date-fns"
import QueryString from 'query-string'
import { Box, Grid, Stack, Typography, Button } from '@mui/material'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded"

import { Movie } from "interfaces"
import { RANDOM_FAVORITE, RANDOM_MIN } from "utils/constants"
import { useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next'

import TrailerModal from "components/trailer/modal-trailer.component"

type Props = {
  movie?: Movie
}
const InformationMovie: React.FC<Props> = ({ movie }) => {

  const { t } = useTranslation()
  const { search: locationSearch } = useLocation();
  const { favorite, min } = QueryString.parse(locationSearch);

  const [openTrailer, setOpenTrailer] = useState(false)


  const handleViewTrailer = useCallback(() => setOpenTrailer(true), [])
  const handleCloseTrailerModal = useCallback(() => setOpenTrailer(false), [])

  return (<Box
    sx={{ width: "100%", position: "relative", paddingBottom: "26.5%", borderRadius: 2, overflow: "hidden" }}
  >
    <img
      src={movie?.hinhAnh}
      style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
      alt={movie?.biDanh}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top, #171515 10%, transparent)",

      }}
    >
      <Grid container spacing={2} p={3} display="flex" justifyContent="space-between" >
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"

        >
          <Stack direction="row" spacing={0.2} alignItems="center">
            <FavoriteBorderIcon color="primary" fontSize="small" />
            <Typography color="primary.main" fontWeight={600}>
              {favorite && RANDOM_FAVORITE[favorite as string]}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} >
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={1} pr={5}>
              <Typography variant="h3" fontWeight={700} color="common.white">
                {movie?.tenPhim}
              </Typography>
              <Typography fontWeight={400} color="common.white">
                <span style={{ fontWeight: 700, marginRight: '10px' }}>
                  {t('MOVIE_DETAILS.OPENING_DAY')}
                </span>
                {movie?.ngayKhoiChieu && format(new Date(movie?.ngayKhoiChieu), 'dd/MM/yyy')}
              </Typography>
              <Typography fontWeight={400} color="common.white">
                <span style={{ fontWeight: 700, marginRight: '10px' }}>
                  {t('MOVIE_DETAILS.TIME')}
                </span>
                {min && `${RANDOM_MIN[min as string]} ${t("COMMON.MIN")} - 9.1 IMDb`}
              </Typography>
              <Typography fontWeight={400} color="common.white">
                <span style={{ fontWeight: 700, marginRight: '10px' }}>
                  {t('MOVIE_DETAILS.DESCRIPTIONS')}
                </span>{movie?.moTa}
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button variant="contained" onClick={handleViewTrailer}>
                <PlayArrowRoundedIcon />
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
    <TrailerModal open={openTrailer} onClose={handleCloseTrailerModal} urlTrailer={movie?.trailer as string} />
  </Box>)


}
export default memo(InformationMovie)