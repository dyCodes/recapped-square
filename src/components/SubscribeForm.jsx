import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import subscription from "../assets/img/subscription-details.svg";

const SubscribeForm = ({ userData }) => {
	const handleSubscribe = (e) => {
		e.preventDefault();

		// Go to dashboard
		window.location.href = "/";

		// Handle subscription
		// fetch("https://recapped-square-api.onrender.com/api/subscription-plan")
		// 	.then((res) => res.json())
		// 	.then((data) => console.log(data))
		// 	.catch((err) => console.log(err));
	};

	return (
		<form id="subscribe" onSubmit={handleSubscribe}>
			<div className="sub">
				<img src={subscription} alt="Subscription Details" />
			</div>

			<div className="subscribe">
				<Typography variant="h6" fontWeight={500} fontSize={20} mt={3} mb={2}>
					Payment Details
				</Typography>

				<TextField
					id="outlined-basic"
					label="Card Number"
					variant="outlined"
					fullWidth
					sx={{ mb: 2 }}
					inputMode="numeric"
					required
				/>
				<div className="_flex">
					<TextField
						id="outlined-basic"
						label="Expiration date"
						placeholder="MM/YY"
						variant="outlined"
						fullWidth
						sx={{ mb: 2 }}
						inputMode="numeric"
						required
					/>
					<span style={{ padding: "6px" }}></span>
					<TextField
						id="outlined-basic"
						label="Security Code"
						variant="outlined"
						fullWidth
						sx={{ mb: 2 }}
						inputMode="numeric"
						required
					/>
				</div>
			</div>

			<Button variant="contained" size="large" fullWidth sx={{ my: 2.5, py: 1.5 }} type="submit">
				Confirm
			</Button>
		</form>
	);
};

export default SubscribeForm;
