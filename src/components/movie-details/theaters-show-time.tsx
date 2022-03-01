import { head } from 'lodash';
import QueryString from 'query-string'
import React, { memo, useState, useEffect, useMemo } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Box, Tab, Tabs, Accordion, AccordionSummary, Stack, Typography, AccordionDetails, CircularProgress } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useGetAllTheatersSystemQuery } from "reduxs/slice/getTheaters"

import { Movie } from 'interfaces';
import { useGetTheatersClusterQuery } from 'reduxs/slice/getTheatersClusterAccording';
import TheaterShowTimesItem from './theater-show-time-item'

type Props = {
  movie?: Movie
}

const TheaterShowTimes: React.FC<Props> = ({ movie }) => {

  const navigate = useNavigate()
  const { id } = useParams()
  const { search: locationSearch } = useLocation();
  const { favorite, min } = QueryString.parse(locationSearch);

  const [value, setValue] = useState('BHDStar')

  const { data: theatersSystemConnection, isLoading: loadingTheatersSysten } = useGetAllTheatersSystemQuery()
  // const { data: theaterSystemConnection, isLoading: theaterSystemLoading } = useGetOneTheaterSystemQuery(value)
  const { data: theatersClusterConnection, isLoading: theaterClusterLoading } = useGetTheatersClusterQuery(value)

  useEffect(() => {
    if (theatersSystemConnection) {
      setValue(head(theatersSystemConnection)?.maHeThongRap as string)
    }
  }, [theatersSystemConnection])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/movie/${id}?favorite=${favorite}&min=${min}&theater=${newValue}`)
  };



  const listTheaters = useMemo(() => movie?.lichChieu?.filter((item) => item.thongTinRap.maHeThongRap === value), [value, movie])

  // const checkShowtimesExits = (value: ShowTime) => {
  //   const item = theatersClusterConnection?.find((item) => item.maCumRap === value.thongTinRap.maCumRap)
  // }
  // const isShowTimesTheater = movie?.lichChieu.some(checkShowtimesExits)

  return (
    <React.Fragment>
      <Box display="flex" alignItemfa-stack="center" justifyContent="center" mb={4} >
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
          {theatersSystemConnection?.map((theater) => (
            <Tab key={`tab-theater-${theater.maHeThongRap}`} label={<img src={theater.logo} style={{ width: '50px', height: "50px" }} alt={theater.biDanh} />} value={theater.maHeThongRap} />
          ))}
        </Tabs>
      </Box>
      <Box width="80%" sx={{ margin: '0 auto' }} mt={3}>
        {theaterClusterLoading && <Box minHeight={100} display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size={20} />
        </Box>}

        {!theaterClusterLoading && theatersClusterConnection?.map((item) => (
          <Accordion key={item.maCumRap}>
            <AccordionSummary
              expandIcon={<Box>
                <ExpandMoreIcon color="secondary" />
              </Box>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Typography variant="h6" fontWeight={700} color="primary.main">
                  {item?.tenCumRap}
                </Typography>
                <img src="/images/ico_hc.png" style={{ width: 18, height: 18 }} />
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <TheaterShowTimesItem theaterId={item.maCumRap} listTheaters={listTheaters} />
            </AccordionDetails>
          </Accordion>
        ))}

      </Box>
    </React.Fragment>
  )
}

export default memo(TheaterShowTimes)