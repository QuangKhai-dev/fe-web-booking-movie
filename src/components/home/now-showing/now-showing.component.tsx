import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Grid, Stack, Typography } from "@mui/material"

import { useGetMoviesNowShowingQuery } from "reduxs/slice/getMovies"

import LoadingComponent from "components/loadings"
import MovieItem from "components/movies/movie-item.component"
import { Fade } from "react-awesome-reveal"

const NowShowingComponent: FC = () => {
  const { t } = useTranslation()

  const { data: listMovies, isLoading } = useGetMoviesNowShowingQuery()

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <Stack spacing={2} id="now-show">
      <Fade delay={300}>
        <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
          {t("HOME_PAGE.NOW_SHOWING")}
        </Typography>
        <Stack spacing={4}>
          <Grid container spacing={2}>
            {listMovies?.items?.map(item => (
              <Grid key={item?.maPhim.toString()} item xs={12} md={3}>
                <MovieItem movie={item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Fade>
    </Stack>
  )
}

export default NowShowingComponent
