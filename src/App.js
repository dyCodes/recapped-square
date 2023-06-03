import "./index.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MarketPlace from "./pages/MarketPlace";
import History from "./pages/History";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import { AppProvider } from "./context/AppContext";

const App = () => {
	return (
		<AppProvider>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="signup" element={<SignUp />} />

					<Route element={<ProtectRoutes />}>
						<Route path="/" element={<Home />} />
						<Route path="marketplace" element={<MarketPlace />} />
						<Route path="transactions" element={<History />} />
						<Route path="settings" element={<Settings />} />
					</Route>

					<Route path="logout" element={<Logout />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
};

const ProtectRoutes = () => {
	const isLoggedIn = localStorage.getItem("userID");
	return isLoggedIn ? <Outlet /> : <Navigate to="/signup" replace={true} />;
};

const Logout = () => {
	localStorage.removeItem("userID");
	localStorage.removeItem("userData");
	return <Navigate to="/signup" replace={true} />;
};

export default App;
