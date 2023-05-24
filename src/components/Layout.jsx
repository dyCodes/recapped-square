import React from "react";
import { Container, Link, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Layout = ({ page, title, children }) => {
	// set page title
	if (title) {
		document.title = `${title} | Recapped App`;
	}

	return (
		<div id={page} className="app">
			{title && (
				<header>
					<Typography variant="h5" component="h1" fontWeight="bold">
						{title}
					</Typography>
				</header>
			)}

			<main>{children}</main>

			<div className="footer_navbar">
				<Container maxWidth="sm" className="container">
					<Link href="/" underline="none">
						<HomeOutlinedIcon sx={{ color: "#fff", fontSize: 38 }} />
					</Link>

					<Link href="/" underline="none">
						<StorefrontOutlinedIcon sx={{ color: "#fff", fontSize: 38 }} />
					</Link>

					<Link href="/" underline="none">
						<HistoryOutlinedIcon sx={{ color: "#fff", fontSize: 38 }} />
					</Link>

					<Link href="/" underline="none">
						<SettingsOutlinedIcon sx={{ color: "#fff", fontSize: 38 }} />
					</Link>
				</Container>
			</div>
		</div>
	);
};

export default Layout;
