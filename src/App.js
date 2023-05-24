import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
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

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		// {
		// 	path: "market",
		// 	element: <Market />,
		// },
	]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;
