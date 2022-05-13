import { makeStyles } from '@mui/styles'

const styles = makeStyles({
  projectWrapper: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 100,
    width: '100%'
  },
  progress: {
    height: '5px',
    background: 'linear-gradient(to right, #ffce26 0%, #c79d00 100%)'
  }
})

export default styles
