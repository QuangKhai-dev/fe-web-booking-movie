import { createTheme } from "@mui/material"

const baseOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "&$disabled": {
            backgroundColor: "#fac011 !important",
            "& .MuiButton-label": {
              color: "white"
            }
          },
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        },

        text: {
          "&$disabled": {
            backgroundColor: "transparent !important"
          }
        },

        contained: {
          color: "#000",

          letterSpacing: 1
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
        }
      }
    }
  }
}

const themeDark = createTheme({
  spacing: 16,
  palette: {
    mode: "dark",
    primary: {
      main: "#ffce26",
      light: "#ffff60",
      dark: "#c79d00"
    },
    secondary: {
      main: "#5cb85c",
      light: "#8feb8b",
      dark: "#26872f"
    },
    background: {
      default: "#080808",
      // paper: "#eee"
    },
    text: {
      secondary: "#898989" ,
      disabled:'#1b1b1b'
    }
  },
  ...baseOptions,
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: '"Dr", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 600,
      fontSize: "3.5rem",
      letterSpacing: 1
    },
    h2: {
      fontWeight: 600,
      fontSize: "3rem",
      letterSpacing: 1
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
      letterSpacing: 1
    },
    h4: {
      letterSpacing: 1,
      fontWeight: 600,
      fontSize: "2rem"
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: 1
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      letterSpacing: 1
    },
    subtitle1: {
      letterSpacing: 1
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 600
    },
    overline: {
      fontWeight: 600
    }
  }
})
const themeLight = createTheme({
  spacing: 16,
  palette: {
    mode: "light",
    primary: {
      main: "#ffce26",
      light: "#ffff60",
      dark: "#c79d00"
    },
    secondary: {
      main: "#1b1b1b",
      light: "#424242",
      dark: "#000000"
    },
    background: {
      default: "white",
      paper: "white"
    },
    text: {
      secondary: "#898989"
    }
  },
  ...baseOptions,
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: '"Dr", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 600,
      fontSize: "3.5rem",
      letterSpacing: 1
    },
    h2: {
      fontWeight: 600,
      fontSize: "3rem",
      letterSpacing: 1
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
      letterSpacing: 1
    },
    h4: {
      letterSpacing: 1,
      fontWeight: 600,
      fontSize: "2rem"
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: 1
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      letterSpacing: 1
    },
    subtitle1: {
      letterSpacing: 1
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 600
    },
    overline: {
      fontWeight: 600
    }
  }
})
export { themeDark, themeLight }
