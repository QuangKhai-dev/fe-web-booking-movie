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
import { Fade } from 'react-awesome-reveal';

type Props = {
  movie?: Movie
}

const TheaterShowTimes: React.FC<Props> = ({ movie }) => {

  const navigate = useNavigate()
  const { id } = useParams()
  const { search: locationSearch } = useLocation();
  const { favorite, min, theater } = QueryString.parse(locationSearch);
  const [value, setValue] = useState('BHDStar')

  const { data: theatersSystemConnection } = useGetAllTheatersSystemQuery()
  const { data: theatersClusterConnection, isLoading: theaterClusterLoading } = useGetTheatersClusterQuery(value)

  useEffect(() => {
    if (theater) setValue(theater as string)
  }, [theater])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/movie/${id}?favorite=${favorite}&min=${min}&theater=${newValue}`)
  };

  const listTheaters = useMemo(() => movie?.lichChieu?.filter((item) => item.thongTinRap.maHeThongRap === value), [value, movie])

  console.log({ movie })

  return (
    <React.Fragment>
      <Fade delay={200}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={4} >
          <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
            {theatersSystemConnection?.map((theater) => (
              <Tab key={`tab-theater-${theater.maHeThongRap}`} label={<img src={theater.logo} style={{ width: '50px', height: "50px" }} alt={theater.biDanh} />} value={theater.maHeThongRap} />
            ))}
          </Tabs>
        </Box>
      </Fade>

      <Fade delay={300}>
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
      </Fade>
    </React.Fragment >
  )
}

export default memo(TheaterShowTimes)