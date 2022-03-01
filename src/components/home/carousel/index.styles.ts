import { makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  carouseContainer: {
    flex:1,
  },
  carouselItem : {
    position:'relative',
    width:'100%',
    paddingBottom:'42.5%',
    borderRadius:8,
    overflow: 'hidden'
  }
})
export default useStyles
