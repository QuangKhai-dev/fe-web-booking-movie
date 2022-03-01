import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  cardContainer: {
    cursor: "pointer",
    position: "relative",
    paddingBottom: "58.5%",
    width: "100%",
    "&:hover": {
      "& $titleContent": {
        bottom: 85
      },
      "& $btnAction": {
        bottom: 20
      },
      "& $thumbnail": {
        transform: "scale(1.2)"
      }
    },
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  },
  thumbnail: {
    position: "absolute",
    width: "100%",
    height: "100%",
    filter: "grayScale(80%)",
    transition: "all .5s ease-in-out"
  },
  boxOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  titleContent: {
    position: "absolute",
    left: 10,
    bottom: 20,
    transition: "all .5s ease-in-out"
  },
  btnAction: {
    position: "absolute",
    left: 10,
    bottom: -100,
    transition: "all .5s ease-in-out"
  },
  favorite: {
    position: "absolute",
    right: 10,
    top: 10
  }
})
export default useStyles
