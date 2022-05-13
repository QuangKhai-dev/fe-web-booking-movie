import * as React from 'react'

import { Dialog, Slide, Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { TransitionProps } from '@mui/material/transitions'
import ReactPlayer from 'react-player/lazy'

type Props = {
  open: boolean
  onClose: () => void
  urlTrailer: string
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const TrailerModal: React.FC<Props> = ({ open, onClose, urlTrailer }) => {
  return (
    <div>
      <Dialog
        fullScreen
        maxWidth="sm"
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        sx={{ background: '#080808' }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          borderRadius={4}
          overflow="hidden"
          position="relative"
        >
          <Box width="80%" height="70%">
            <ReactPlayer url={urlTrailer} playing controls loop={false} width="100%" height="100%" />
          </Box>
          <IconButton sx={{ position: 'absolute', top: '2%', right: '2%' }}>
            <CloseIcon fontSize="large" onClick={onClose} />
          </IconButton>
        </Box>
      </Dialog>
    </div>
  )
}
export default TrailerModal
