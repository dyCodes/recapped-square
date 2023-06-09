import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import profilePhoto from "../assets/img/profile.png";

const ProfileSection = () => {
	const userData = JSON.parse(localStorage.getItem("userData"));

	return (
		<div className="profile_section">
			<div className="profile_header">
				<div className="_flex">
					<img src={profilePhoto} alt="Current User" width="70px" />
					<h3 style={{ marginRight: "4px" }}>{userData.name}</h3>
				</div>

				<Button variant="outlined" size="medium" endIcon={<ArrowForward />}>
					Profile
				</Button>
			</div>

			<div className="stats">
				<div className="stat">
					<p className="_mb0">Total bottles donated</p>
					<b>625 bottles</b>
				</div>

				<div className="stat">
					<p className="_mb0">Total sustainability points</p>
					<b>62.5 points</b>
				</div>

				<div className="stat">
					<p className="_mb0">Quality requirements</p>
					<b>Excellent</b>
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;
