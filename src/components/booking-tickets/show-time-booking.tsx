import React, { useRef } from 'react'
import { Grid, Stack, Typography, Box, IconButton } from '@mui/material'
import Slider from 'react-slick'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  arrows: false
}
const ShowTimeBooking = () => {
  const ref = useRef(null)
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }
  return (
    <Box my={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: -6, right: -50 }}>
              <IconButton>
                <NavigateNextRoundedIcon />
              </IconButton>
            </Box>
            <Box sx={{ position: 'absolute', top: -6, left: -50 }}>
              <IconButton>
                <NavigateBeforeRoundedIcon />
              </IconButton>
            </Box>
            <Slider {...settings} ref={ref}>
              <Box>
                <Typography textAlign="center" color="text.primary">
                  13 / 02 / 2020
                </Typography>
              </Box>
              <div>
                <Typography textAlign="center" color="text.primary">
                  13 / 02 / 2020
                </Typography>
              </div>
              <div>
                <Typography textAlign="center" color="text.primary">
                  14 / 02 / 2020
                </Typography>
              </div>
              <div>
                <Typography textAlign="center" color="text.primary">
                  15 / 02 / 2020
                </Typography>
              </div>
              <div>
                <Typography textAlign="center" color="text.primary">
                  16 / 02 / 2020
                </Typography>
              </div>
              <div>
                <Typography textAlign="center" color="text.primary">
                  17 / 02 / 2020
                </Typography>
              </div>
            </Slider>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small">Time</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" value={age} label="Age" onChange={handleChange}>
              <MenuItem value={10}>12:30</MenuItem>
              <MenuItem value={20}>13:30</MenuItem>
              <MenuItem value={30}>14:40</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small">Theater</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" value={age} label="Age" onChange={handleChange}>
              <MenuItem value={10}>CGV</MenuItem>
              <MenuItem value={20}>BDH</MenuItem>
              <MenuItem value={30}>HEHE</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ShowTimeBooking
