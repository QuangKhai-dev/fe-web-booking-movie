import { Stack, Typography, useTheme } from '@mui/material'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import { useEffect, useState } from 'react'

const CountDownTime = () => {
  const theme = useTheme()

  const [countDown, setCountDown] = useState(5 * 60) // second
  const [minutesCurrent, setMinutesCurrent] = useState(0)
  const [secondCurrent, setSecondCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown > 0) setCountDown(countDown - 1)
    }, 1000)
    return () => clearInterval(timer)
  })

  useEffect(() => {
    let [minutes, second] = getReturnValues(countDown)
    setMinutesCurrent(minutes)
    setSecondCurrent(second)
  }, [countDown])

  const getReturnValues = (countDown: number) => {
    const seconds = countDown % 60
    const minutes = Math.floor(countDown / 60)
    return [minutes, seconds]
  }

  return (
    <Stack
      sx={{
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '5px 20px',
        borderRadius: 2
      }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Typography color="text.primary">Thời gian đặt vé</Typography>
      <Stack direction="row" spacing={0.2} alignItems={'center'}>
        <AccessTimeRoundedIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
        <Typography color="secondary.main" fontWeight={600}>
          {`0${minutesCurrent}:${secondCurrent}`}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default CountDownTime
