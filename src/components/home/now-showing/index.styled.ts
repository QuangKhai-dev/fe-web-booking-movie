import { makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    cardContainer:{
        position: 'relative',
        paddingBottom: '52.5%',
         width: '100%',
         '&:hover':{
           '& $titleContent':{
              bottom: 100
           },
           '& $btnAction':{
              bottom: 20
           },
           '& $thumbnail':{
              transform: 'scale(1.2)',
           }
         }
    },
    thumbnail:{
      position: 'absolute',
      width: '100%',
      height: '100%',
      filter:  'grayScale(60%)',
      transition: 'all .5s ease-in-out',
    },
    boxOverlay:{
      position:"absolute",
      bottom: 0 ,
      left:0,
      width: '100%',
      height: '100%',
      overflow:'hidden'
    },
    titleContent:{
      position: 'absolute',
      left: 10,
      bottom: 20,
      transition: 'all .5s ease-in-out',
    },
    btnAction:{
      position: 'absolute',
      left: 10,
      bottom: -100,
      transition: 'all .5s ease-in-out',
    },
    title:{
      transform: 'tranSlateY(0%)'
    }
})
export default useStyles