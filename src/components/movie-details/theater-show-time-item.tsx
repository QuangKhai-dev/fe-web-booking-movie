import { memo } from "react"
import { Stack, Typography, Box, Alert } from '@mui/material'
import { ShowTime } from "interfaces"
import { useTranslation } from "react-i18next"

type Props = {
  theaterId: string,
  listTheaters?: ShowTime[]
}

const TheaterShowTimesItem: React.FC<Props> = ({
  theaterId,
  listTheaters
}) => {

  const { t } = useTranslation()

  const showTimes = listTheaters?.filter(({ thongTinRap }) => thongTinRap.maCumRap === theaterId)
  console.log({ showTimes })

  return (
    <Stack spacing={1}>
      {showTimes?.length === 0 && <Alert severity="warning" >{t('MOVIE_DETAILS.NOT_SHOW_TIMES')}</Alert>}
      {showTimes?.map((item) => (
        <Stack spacing={1} key={`show-time-${item.thongTinRap.maCumRap}`}>
          <Typography fontWeight={500}>
            {item.thongTinRap.tenCumRap}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{
              paddingY: 0.3,
              paddingX: 1,
              borderRadius: 1,
              border: (theme) => `1px solid ${theme.palette.secondary.main}`
            }}>
              <Typography color="secondary" fontWeight={500}>
                11:30 pm
              </Typography>
            </Box>
          </Stack>
        </Stack>
      )

      )
      }

    </Stack>
  )
}

export default memo(TheaterShowTimesItem)