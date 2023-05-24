import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import Home from "./pages/Home";

const App = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#111",
			},
			secondary: {
				main: "#2f2f2f",
			},
		},
		typography: {
			fontFamily: "Poppins, sans-serif",
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						// borderWidth: "2px",
						borderRadius: "6px",
						borderColor: "#111",
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Home />
		</ThemeProvider>
	);
};

export default App;
