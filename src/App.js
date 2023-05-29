import "./index.css";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MarketPlace from "./pages/MarketPlace";
import { AppProvider } from "./context/AppContext";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		{
			path: "market-place",
			element: <MarketPlace />,
		},
	]);

	return (
		<AppProvider>
			<CssBaseline />
			<RouterProvider router={router} />
		</AppProvider>
	);
};

export default App;
