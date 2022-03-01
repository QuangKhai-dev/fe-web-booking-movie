import React from "react"
import { Stack } from "@mui/material"
import Carousel from "components/home/carousel/carousel.component"
import BookingNowComponent from "components/home/book-now/book-now.component"
import NowShowingComponent from "components/home/now-showing/now-showing.component"
import ComingSoonComponent from "components/home/coming-soon/coming-soon.component"
import SectionContainer from "components/layout/section-container.component"
import NewsComponent from "components/home/news/news.component"

const HomePage = () => (
  <React.Fragment>
    <Carousel />
    <SectionContainer sx={{ bgcolor: "background.default" }}>
      <Stack spacing={4}>
        <BookingNowComponent />
        <NowShowingComponent />
        <ComingSoonComponent />
        <NewsComponent />
      </Stack>
    </SectionContainer>
  </React.Fragment>
)

export default HomePage
