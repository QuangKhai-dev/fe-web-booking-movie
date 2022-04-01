import React from "react"
import { Grid, Stack, Typography } from "@mui/material"
import MovieItem from "components/movies/movie-item.component"
import { useTranslation } from "react-i18next"
import { addDays, format } from "date-fns"
import { useGetMoviesComingSoonQuery } from "reduxs/slice/getMovies"
import { Fade } from "react-awesome-reveal"

const ComingSoonComponent: React.FC = () => {
  const { t } = useTranslation()
  const fromDay = format(new Date(), "dd-MM-yyy")
  const toDay = format(addDays(new Date(), 60), "dd-MM-yyy")

  const { data: listMovies } = useGetMoviesComingSoonQuery({ fromDay, toDay })

  return (
    <Fade delay={300}>
      <Stack spacing={2}>
        <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
          {t("HOME_PAGE.COMING_SOON")}
        </Typography>
        <Stack spacing={4}>
          {listMovies?.length === 0 && <Typography textAlign="center">
            {t('COMMON.NOT_AVAILABLE')}
          </Typography>}
          <Grid container spacing={2}>

            {listMovies?.map(item => (
              <Grid key={item?.maPhim.toString()} item xs={12} md={3}>
                <MovieItem movie={item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Fade>
  )
}

export default ComingSoonComponent
