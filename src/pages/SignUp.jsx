import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import SubscribeForm from "../components/SubscribeForm";

const SignUp = () => {
	const [userData, setUserData] = useState({ name: "", email: "", phone: "", address: "", password: "" });
	const [currentStep, setCurrentStep] = useState("signUp");
	const navigate = useNavigate();

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("userData"));
		if (userData && userData?.status) {
			navigate("/");
		}
	}, []);

	return (
		<div id="SignUp">
			<Container maxWidth="sm" className="container">
				<Link id="logo" to="/">
					<Typography variant="h4" component="h1" fontWeight={500} align="center">
						Recapped
					</Typography>
				</Link>

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
