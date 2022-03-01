import React, { useMemo } from "react"
import { useAppSelector } from "reduxs/hooks"
import { useTranslation } from "react-i18next"

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { InputBase, Stack, Box } from "@mui/material"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"

import { useGetMoviesComingSoonQuery, useGetMoviesNowShowingQuery } from "reduxs/slice/getMovies"
import { addDays, format } from "date-fns"
import { Movie } from "../../interfaces"

const SearchComponent = () => {
  const { t } = useTranslation()
  const modeTheme = useAppSelector(state => state["mode-theme"].modeTheme)

  const fromDay = format(new Date(), "dd-MM-yyy")
  const toDay = format(addDays(new Date(), 60), "dd-MM-yyy")
  const { data: listMoviesNowShowing } = useGetMoviesNowShowingQuery()
  const { data: listMoviesComingSoon } = useGetMoviesComingSoonQuery({ fromDay, toDay })

  const listMovies: Array<Movie> = useMemo(
    () => [...(listMoviesNowShowing?.items || []), ...(listMoviesComingSoon || [])],
    [listMoviesNowShowing, listMoviesComingSoon]
  )


  return (
    <Box width={1}>
      <Stack
        position="relative"
        flex={1}
        px={0.5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ bgcolor: modeTheme === "dark" ? "hsla(0,0%,87%,.12)" : "hsl(0deg 0% 35% / 12%)", borderRadius: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={0.3} width={1}>
          <SearchOutlinedIcon sx={{ color: "white" }} fontSize="small" />
          <InputBase
            sx={{
              paddingY: "5px",
              borderRadius: 2,
              width: "100%"
            }}
            placeholder={t("HEADER.PLACE_HOLDER_SEARCH")}
          />
        </Stack>
        <ArrowDropDownRoundedIcon sx={{ color: "white" }} />
      </Stack>
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    marginTop: "5px",*/}
      {/*    background: "hsla(0,0%,90%,1)",*/}
      {/*    borderRadius: 2,*/}
      {/*    width: "53%",*/}
      {/*    position: "absolute"*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Box>*/}
      {/*    {listMovies?.map(item => (*/}
      {/*      <Stack*/}
      {/*        // key={item?.id}*/}
      {/*        p={1.5}*/}
      {/*        sx={{*/}
      {/*          cursor: "pointer",*/}
      {/*          transition: "all .5s",*/}
      {/*          "&:hover": {*/}
      {/*            background: "hsla(0,0%,87%,1)"*/}
      {/*          },*/}
      {/*          borderRadius: 2*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <Grid container spacing={1}>*/}
      {/*          <Grid item md={3}>*/}
      {/*            <Box*/}
      {/*              sx={{*/}
      {/*                position: "relative",*/}
      {/*                paddingBottom: "56.2%",*/}
      {/*                borderRadius: 2,*/}
      {/*                overflow: "hidden"*/}
      {/*              }}*/}
      {/*            >*/}
      {/*              <img*/}
      {/*                src="https://picsum.photos/200/300"*/}
      {/*                style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}*/}
      {/*              />*/}
      {/*            </Box>*/}
      {/*          </Grid>*/}
      {/*          <Grid item md={9} display="flex" alignItems="center">*/}
      {/*            <Stack>*/}
      {/*              <Typography fontWeight={700} variant="h6">*/}
      {/*                HOàng hôn năng nhẹ nhàng*/}
      {/*              </Typography>*/}
      {/*              <Stack>*/}
      {/*                <Typography variant="subtitle1" fontWeight={400}>*/}
      {/*                  {minRandom && `${RANDOM_MIN[minRandom]} ${t("COMMON.MIN")} - 9.1 IMDb`}*/}
      {/*                </Typography>*/}
      {/*              </Stack>*/}
      {/*              <Stack direction="row" spacing={0.2} alignItems="center">*/}
      {/*                <Typography variant="subtitle1" fontWeight={400}>*/}
      {/*                  {favoriteRandom && RANDOM_FAVORITE[favoriteRandom]} lượt thích*/}
      {/*                </Typography>*/}
      {/*              </Stack>*/}
      {/*            </Stack>*/}
      {/*          </Grid>*/}
      {/*        </Grid>*/}
      {/*      </Stack>*/}
      {/*    ))}*/}
      {/*    <Stack width={1}>123123</Stack>*/}
      {/*    <Stack width={1}>123123</Stack>*/}
      {/*    <Stack width={1}>123123</Stack>*/}
      {/*    <Stack width={1}>123123</Stack> <Stack width={1}>123123</Stack> <Stack width={1}>123123</Stack>*/}
      {/*  </Box>*/}
      {/*</Box>*/}
    </Box>
  )
}

export default SearchComponent
