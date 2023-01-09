import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    delete: {
      main: "#f50057",
      contrastText: "#fff",
    },
    new: {
      main: "#11cb5f",
      contrastText: "#fff",
    },
    edit: {
      main: "#ffc107",
      contrastText: "#fff",
    },
    store: {
      main: "#000051",
      contrastText: "#fff",
    },
    upload: {
      main: "#1e73be",
      contrastText: "#fff",
    },
  },
});

export default function BasicButton({ text, color, component }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color={color}
        component={component}
        sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}
