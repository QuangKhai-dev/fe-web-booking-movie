import { Box } from '@mui/material'
import { memo } from 'react'
import useStyles from './index.styles'
import useScrollApp from 'hooks/useScroll'

const ScrollIndicator = () => {
  const styles = useStyles()
  const { scrollTop } = useScrollApp()

  return (
    <Box className={styles.projectWrapper}>
      <Box className={styles.progress} style={{ width: `${scrollTop}%` }} />
    </Box>
  )
}

export default memo(ScrollIndicator)
