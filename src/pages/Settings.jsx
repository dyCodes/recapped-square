import React from "react";
import { Container, Typography } from "@mui/material";
import Layout from "../components/Layout";

const Settings = () => {
	return (
		<Layout page="Settings">
			<Container maxWidth="sm" className="container">
				<Typography variant="h5" component="h1" align="center" mb={3} fontWeight="bold">
					Settings
				</Typography>
			</Container>
		</Layout>
	);
};

export default Settings;
