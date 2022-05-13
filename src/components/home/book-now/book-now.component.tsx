import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Box, Stack, Autocomplete, TextField, Button } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

const mocks = [
  {
    id: 1,
    title: 'Help'
  },
  {
    id: 2,
    title: 'Hi'
  }
]

const BookNowComponent = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <Fade delay={200}>
        <Card sx={{ width: '90%', bgcolor: 'background.paper', margin: '0 auto', my: 2 }}>
          <Box p={3} display="flex" alignItems="center" justifyContent="center">
            <Stack direction="row" spacing={1}>
              <Box minWidth={200}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={mocks.map(option => option.title)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label={t('COMMON.MOVIE')}
                      InputProps={{
                        ...params.InputProps,
                        type: 'search'
                      }}
                    />
                  )}
                />
              </Box>
              <Box minWidth={200}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={mocks.map(option => option.title)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label={t('COMMON.THEATER')}
                      InputProps={{
                        ...params.InputProps,
                        type: 'search'
                      }}
                    />
                  )}
                />
              </Box>
              <Box minWidth={200}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={mocks.map(option => option.title)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label={t('COMMON.WATCH_DAY')}
                      InputProps={{
                        ...params.InputProps,
                        type: 'search'
                      }}
                    />
                  )}
                />
              </Box>
              <Box minWidth={200}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={mocks.map(option => option.title)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label={t('COMMON.SHOW_TIME')}
                      InputProps={{
                        ...params.InputProps,
                        type: 'search'
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Button fullWidth variant="contained" disabled sx={{ height: 55 }}>
                  {t('COMMON.BOOK_NOW')}
                </Button>
              </Box>
            </Stack>
          </Box>
        </Card>
      </Fade>
    </Box>
  )
}

export default BookNowComponent
