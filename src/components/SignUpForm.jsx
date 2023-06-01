import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import subscription from "../assets/img/subscription-details.svg";

const SignUpForm = ({ userData, setUserData, setCurrentStep }) => {
	const handleSignUp = (e) => {
		e.preventDefault();

		setCurrentStep("subscribe");

		// if (userData.email && userData.password) {
		// }
	};

	return (
		<form onSubmit={handleSignUp}>
			<div>
				<TextField
					fullWidth
					className="signup_input"
					label="Name"
					placeholder="Please input your full name"
					required
				/>
				<TextField
					fullWidth
					className="signup_input"
					label="Email"
					placeholder="Please input your email"
					required
				/>
				<TextField fullWidth className="signup_input" label="Phone" placeholder="Please input your email" />
				<TextField
					fullWidth
					className="signup_input"
					label="Address"
					placeholder="Please input your address"
					required
				/>
				<TextField
					fullWidth
					className="signup_input"
					label="Password"
					type="password"
					placeholder="Please input your password"
					required
				/>
			</div>

			<div className="sub">
				<Typography variant="h6" fontWeight={500} fontSize={18} mt={2} mb={1}>
					Subscription Details
				</Typography>
				<img src={subscription} alt="Subscription Details" />
			</div>

			<Button variant="contained" size="large" fullWidth sx={{ my: 2.5, py: 1.5 }} type="submit">
				Continue
			</Button>

			<Typography variant="body2" align="center" sx={{ mt: 2 }}>
				Already have an account? <a href="/signup">Login</a>
			</Typography>
		</form>
	);
};

export default SignUpForm;
