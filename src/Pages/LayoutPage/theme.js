import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9A5FA3",
    },
    secondary: {
      main: "#562583",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#562583",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          padding: "15px",
          boxShadow: "none !important",
          borderRadius: "0",
        },
        outlinedPrimary: {
          padding: "15px",
          borderRadius: "0",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "#9A5FA366",
          "& .MuiTableCell-head": {
            fontWeight: 500,
            lineHeight: "16px",
            fontFamily: "'Rubik', sans-serif",
            color: "black",
            fontSize: "12px",
            padding: "6px",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            // border: "1px solid #959DB2",
            borderRadius: "0px !important",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "10px",
          fontSize: "12px",
          fontFamily: "'Poppins', 'Public Sans', sans-serif",
          fontWeight: 500,
          color: "#656565",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiDialog-paper": {
            borderRadius: 0,
            padding: "20px !important",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { color: "#7E858E" },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: "3px",
              border: "1px solid #D7DFE9",
            },
            fontFamily: "'Poppins', 'Public Sans', sans-serif",
          },
          "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
            {
              borderRadius: 0,
            },
          fontSize: "2px",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "none !important",
          borderTop: "1px solid lightgray",
          borderRadius: 0,
          width: "190px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow:
            "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12) !important",
          borderTop: "none",
          borderRadius: "3px",
          width: "auto",
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: "'Public Sans', sans-serif",
      fontSize: "2rem",
    },
    forgotPassword: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      color: "#959DB2",
    },
    variant1: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      color: "white",
      fontWeight: 700,
    },
    variant2: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      color: "white",
      fontWeight: 400,
    },
    variant3: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      color: "white",
      fontWeight: 500,
    },
    variant4: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      color: "#959DB2",
      fontWeight: 600,
    },
    inputTitle: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500,
      color: "#7E858E",
      paddingBottom: "2px",
    },
    gridTitle: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      fontWeight: 500,
      color: "#BDBDBD",
      lineHeight: "24px",
      fontSize: "14px",
    },
    gridSub: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      fontWeight: 500,
      color: "#4F4F4F",
      lineHeight: "24px",
      fontSize: "16px",
    },
    drawerItems: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      color: "#ffffff",
      fontSize: "13px",
    },
    dashboardItem: {
      fontFamily: "'Poppins', 'Public Sans', sans-serif",
      fontSize: "18px",
      fontWeight: 500,
    },
  },
});

export default responsiveFontSizes(theme);
