/* eslint-disable jsx-a11y/img-redundant-alt */

import { useParams } from "react-router-dom"
import { Box, Stack, Divider } from "@mui/material"

import { useGetMovieQuery } from "reduxs/slice/getMovies"

import LoadingComponent from "components/loadings"
import InfoMovie from 'components/movie-details/info-movie'
import RulesTheater from 'components/movie-details/rules-theater'
import SectionContainer from "components/layout/section-container.component"
import TheatersShowTime from "components/movie-details/theaters-show-time";

const MovieDetail = () => {

  const { id } = useParams()
  const { data: movie, isLoading } = useGetMovieQuery(id)

  return (isLoading) ? <LoadingComponent /> : (
    <SectionContainer sx={{ bgcolor: "background.default" }}>
      <Stack>
        <InfoMovie movie={movie} />
        <RulesTheater />
        <Box my={3} >
          <Divider />
        </Box>
        <TheatersShowTime movie={movie} />
      </Stack>
    </SectionContainer>
  )
}

export default MovieDetail
