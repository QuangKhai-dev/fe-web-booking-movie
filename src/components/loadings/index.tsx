import React from "react"
import { Box } from "@mui/material"
import Lottie from "react-lottie"
import LoadingData from "lottie/loading.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const LoadingComponent = () => {
  return (
    <Box
      id="loading"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 999,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#333333c7"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
        <Lottie options={defaultOptions} height={100} width={100} />
      </Box>
    </Box>
  )
}

export default LoadingComponent
