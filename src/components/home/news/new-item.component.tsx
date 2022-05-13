import React from 'react'
import { Card, CardActionArea, CardMedia, Stack, Typography, Avatar } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import { format } from 'date-fns'
import useStyles from './index.styles'
import { useNavigate } from 'react-router-dom'

const NewItemComponent = () => {
  const styles = useStyles()
  const navigate = useNavigate()

  const handleViewDetail = () => navigate('/news/123')

  return (
    <CardActionArea style={{ overflow: 'hidden' }}>
      <Card sx={{ p: 0.5 }} onClick={handleViewDetail}>
        <CardMedia
          className={styles.cardMedia}
          height={200}
          component="img"
          image="https://cdn.onebauer.media/one/media/61c3/8ca7/26d3/d554/b8a5/cb78/the-batman-riddler.jpg?format=jpg&quality=80&width=400&ratio=16-9&resize=aspectfill"
          alt="green iguana"
        />

        <Stack spacing={1} p={1}>
          <Typography fontWeight={600} component="h6" variant="subtitle1">
            The Batman: Paul Dano On His ‘Very Intense, Powerful’ Riddler Costume – Exclusive
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack spacing={0.5} direction="row" alignItems="center">
              <Avatar alt="Admin" src="/images/auth-background.jpg" />
              <Typography sx={{ color: theme => theme.palette.text.secondary }} fontWeight={600} variant="body2">
                Admin
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <EventIcon fontSize="small" fontWeight={600} sx={{ color: theme => theme.palette.text.secondary }} />
              <Typography variant="subtitle2" sx={{ color: theme => theme.palette.text.secondary }}>
                {format(new Date(), 'dd/MM/yyy')}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </CardActionArea>
  )
}

export default NewItemComponent
