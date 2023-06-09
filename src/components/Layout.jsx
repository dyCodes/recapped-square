import React from "react";
import { Container, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Layout = ({ page, title, children }) => {
	// set page title
	document.title = (title ? `${title} | ` : "") + "Recapped App";

	return (
		<div id={page} className="app">
			<main>{children}</main>

			<div className="footer_navbar">
				<Container maxWidth="sm" className="container">
					<Link to="/" component={NavLink} underline="none">
						<HomeOutlinedIcon className="navIcon" />
					</Link>

					<Link to="/marketplace" component={NavLink} underline="none">
						<StorefrontOutlinedIcon className="navIcon" />
					</Link>

					<Link to="/transactions" component={NavLink} underline="none">
						<HistoryOutlinedIcon className="navIcon" />
					</Link>

					<Link to="/settings" component={NavLink} underline="none">
						<SettingsOutlinedIcon className="navIcon" />
					</Link>
				</Container>
			</div>
		</div>
	);
};

export default Layout;
