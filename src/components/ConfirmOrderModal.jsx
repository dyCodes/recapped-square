import { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Grid,
	Input,
	Slider,
	Typography,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const ConfirmOrderModal = ({ confirmModal, handleDonate, handleClose }) => {
	const [value, setValue] = useState(50);

	const handleSliderChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleInputChange = (e) => {
		setValue(e.target.value === "" ? "" : Number(e.target.value));
	};

	return (
		<Dialog open={confirmModal.status} onClose={handleClose} fullWidth>
			<DialogTitle>Confirm Order</DialogTitle>

			<Divider />

			<DialogContent>
				<Typography id="input-slider" gutterBottom>
					Quantity of bottles to donate
				</Typography>

				<Grid container spacing={2} alignItems="center">
					<Grid item xs>
						<Slider
							value={typeof value === "number" ? value : 0}
							onChange={handleSliderChange}
							aria-labelledby="input-slider"
						/>
					</Grid>
					<Grid item>
						<Input
							value={value}
							size="small"
							onChange={handleInputChange}
							// onBlur={handleBlur}
							inputProps={{
								step: 10,
								min: 0,
								max: 150,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>

				<Divider sx={{ my: 2.5 }} />

				<div className="center_content">
					<Typography variant="h6" component="h3" fontWeight={500} mb={1}>
						Sustainability Points
					</Typography>

					<div>
						<span style={{ fontSize: "24px", fontWeight: "bold" }}>{value / 10} </span>
						<span style={{ color: "gray" }}>Potential gain</span>
					</div>
				</div>

				<Divider sx={{ my: 2.5 }} />

				<div className="center_content">
					<Typography variant="h6" component="h3" fontWeight={500} mb={1}>
						Collection Pickup
					</Typography>

					<div>
						<span style={{ color: "gray" }}>12B thistle street, Amen estate, Ajah, Lagos </span>
						<div className="_flex_center" style={{ marginTop: "8px" }}>
							<CalendarMonthOutlinedIcon fontSize="small" sx={{ mr: "6px" }} />
							<span style={{ fontSize: "15px", fontWeight: 500 }}>27th June 2023</span>
						</div>
					</div>
				</div>
			</DialogContent>

			<Divider />

			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleDonate}>Confirm</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmOrderModal;
