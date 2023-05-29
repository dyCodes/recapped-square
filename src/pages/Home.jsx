import React, { useEffect } from "react";
import { Button, Card, Container, Divider, Typography } from "@mui/material";
import Layout from "../components/Layout";
import { ArrowForward } from "@mui/icons-material";
import ProfileSection from "../components/ProfileSection";
import { Link } from "react-router-dom";

const Home = () => {
	// Scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Layout page="Home">
			<Container maxWidth="sm" className="container">
				<Card className="header_card" sx={{ mb: 3 }}>
					<Typography variant="h5" component="h1" className="intro_heading">
						Recycle bottles before they get on the streets while fulfilling your green house duties
					</Typography>

					<Button
						variant="outlined"
						size="large"
						className="card_button"
						to="/marketplace"
						component={Link}
						endIcon={<ArrowForward />}>
						Donate & Buy bottles
					</Button>
				</Card>

				<Button
					variant="outlined"
					size="large"
					className="card_button"
					to="/transactions"
					component={Link}
					endIcon={<ArrowForward />}>
					<div>
						Transaction list
						<span className="button_subtext">Checkout previous transactions</span>
					</div>
				</Button>

				<Divider variant="fullWidth" sx={{ mt: 5, mb: 3 }} />

				{/* Profile section */}
				<ProfileSection />
			</Container>
		</Layout>
	);
};

export default Home;
