import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import SignUpForm from "../components/SignUpForm";
import SubscribeForm from "../components/SubscribeForm";

const SignUp = () => {
	const [userData, setUserData] = useState({});
	const [currentStep, setCurrentStep] = useState("signUp");

	return (
		<div id="SignUp">
			<Container maxWidth="sm" className="container">
				<div id="logo">
					<Typography variant="h4" component="h1" fontWeight={500} align="center">
						Recapped
					</Typography>
				</div>

				{currentStep === "signUp" ? (
					<SignUpForm userData={userData} setUserData={setUserData} setCurrentStep={setCurrentStep} />
				) : (
					<SubscribeForm userData={userData} />
				)}
			</Container>
		</div>
	);
};

export default SignUp;
