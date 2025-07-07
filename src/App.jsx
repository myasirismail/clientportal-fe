import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./Pages/LayoutPage/theme";
import RoutesPage from "./RoutesPage";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={2}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <RoutesPage />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
