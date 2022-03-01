import React from "react"
import { Grid, Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import NewItemComponent from "./new-item.component"

const NewsComponent = () => {
  const { t } = useTranslation()

  return (
    <Stack spacing={2}>
      <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
        {t("COMMON.NEWS")}
      </Typography>
      <Stack spacing={4}>
        <Grid container spacing={2}>
          {[...new Array(8)].map((item, index) => (
            <Grid item xs={12} md={3} key={`news-${index}`}>
              <NewItemComponent />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default NewsComponent
