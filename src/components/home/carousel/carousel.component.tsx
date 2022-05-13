import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Box } from '@mui/material'
import useStyles from 'components/home/carousel/index.styles'

const mocks = [
  {
    id: '123kjas3',
    url: 'https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg'
  },
  {
    id: '1212sas3',
    url: 'https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png'
  }
]

const CarouselComponent = () => {
  const styles = useStyles()

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Carousel
      itemsToShow={1}
      enableAutoPlay={false}
      showEmptySlots
      autoPlaySpeed={3000}
      focusOnSelect
      itemPadding={[12, 12]}
      showArrows={false}
      pagination={false}
    >
      {mocks.map(item => (
        <Box key={item.id} className={styles.carouselItem}>
          <img
            src={item.url}
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
            alt="banner"
          />
        </Box>
      ))}
    </Carousel>
  )
}

export default CarouselComponent
