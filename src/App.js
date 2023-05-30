import "./index.css";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MarketPlace from "./pages/MarketPlace";
import { AppProvider } from "./context/AppContext";
import History from "./pages/History";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		{
			path: "sign-up",
			element: <SignUp />,
		},
		{
			path: "marketplace",
			element: <MarketPlace />,
		},
		{
			path: "transactions",
			element: <History />,
		},
		{
			path: "settings",
			element: <Settings />,
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
