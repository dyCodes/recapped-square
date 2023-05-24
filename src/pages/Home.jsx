import React from "react";
import { Button, Card, Container, Divider, Typography } from "@mui/material";
import Layout from "../components/Layout";
import { ArrowForward } from "@mui/icons-material";
import profilePhoto from "../assets/img/profile.png";

const Home = () => {
	return (
		<Layout page="Home">
			<Container maxWidth="sm" className="container">
				<Card className="header_card" sx={{ mb: 3 }}>
					<Typography variant="h5" component="h1" className="intro_heading">
						Recycle bottles before they get on the streets while fulfilling your green house duties
					</Typography>

					<Button variant="outlined" size="large" className="card_button" endIcon={<ArrowForward />}>
						Donate & Buy bottles
					</Button>
				</Card>

				<Button variant="outlined" size="large" className="card_button" endIcon={<ArrowForward />}>
					Transaction list
				</Button>

				<Divider variant="fullWidth" sx={{ mt: 5, mb: 3 }} />

				{/* Profile section */}
				<div className="profile_section">
					<div className="profile_header">
						<div className="_flex">
							<img src={profilePhoto} alt="Current User" width="70px" />
							<h3>Judy Curie</h3>
						</div>

						<Button variant="outlined" size="medium" endIcon={<ArrowForward />}>
							Profile
						</Button>
					</div>

					<div className="stats">
						<div className="stat">
							<p className="_mb0">Total bottles donated</p>
							<b>256 bottles</b>
						</div>

						<div className="stat">
							<p className="_mb0">Total sustainability points</p>
							<b>53 points</b>
						</div>

						<div className="stat">
							<p className="_mb0">Quality requirements</p>
							<b>Excellent</b>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default Home;
