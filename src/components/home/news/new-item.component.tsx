import React from "react"
import { Card, CardActionArea, CardMedia, Stack, Typography } from "@mui/material"
import EventIcon from "@mui/icons-material/Event"
import { format } from "date-fns"
import useStyles from "./index.styles"

const NewItemComponent = () => {
  const styles = useStyles()
  return (
    <CardActionArea>
      <Card sx={{ p: 0.5 }}>
        <CardMedia
          className={styles.cardMedia}
          height={150}
          component="img"
          image="https://cdn.onebauer.media/one/media/61c3/8ca7/26d3/d554/b8a5/cb78/the-batman-riddler.jpg?format=jpg&quality=80&width=400&ratio=16-9&resize=aspectfill"
          alt="green iguana"
        />

        <Stack spacing={0.5} my={0.5}>
          <Typography fontWeight={600} variant="h6">
            The Batman: Paul Dano On His ‘Very Intense, Powerful’ Riddler Costume – Exclusive
          </Typography>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <EventIcon fontSize="small" sx={{ color: theme => theme.palette.text.secondary }} />
            <Typography variant="subtitle2" sx={{ color: theme => theme.palette.text.secondary }}>
              {format(new Date(), "dd/MM/yyy")}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </CardActionArea>
  )
}

export default NewItemComponent
