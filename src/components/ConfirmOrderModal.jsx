import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Divider,
	Grid,
	Input,
	Slider,
	Typography,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const ConfirmOrderModal = ({ confirmModal, handleDonate, handleClose, value, setValue }) => {
	const handleSliderChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleInputChange = (e) => {
		setValue(e.target.value === "" ? "" : Number(e.target.value));
	};

	return (
		<Dialog open={confirmModal.status} onClose={handleClose} fullWidth>
			<DialogContent>
				<Typography variant="h6" component="h3" fontWeight={500} mb={1.28} align="center">
					Quantity of bottles
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

				<ModalContent title="Sustainability Points">
					<div>
						<span style={{ fontSize: "24px", fontWeight: "bold" }}>{value / 10} </span>
						<span style={{ color: "gray" }}>Potential gain</span>
					</div>
				</ModalContent>

				<ModalContent title="Collection Pickup">
					<div>
						<span style={{ color: "gray" }}>12B thistle street, Amen estate, Ajah, Lagos </span>
						<div className="_flex_center" style={{ marginTop: "8px" }}>
							<CalendarMonthOutlinedIcon fontSize="small" sx={{ mr: "6px" }} />
							<span style={{ fontSize: "15px", fontWeight: 500 }}>27th June 2023</span>
						</div>
					</div>
				</ModalContent>
			</DialogContent>

			<Divider />

			<DialogActions sx={{ py: 2.5, px: 2, justifyContent: "center" }}>
				<Button variant="outlined" fullWidth onClick={handleClose}>
					Cancel
				</Button>
				<Button variant="contained" fullWidth onClick={handleDonate}>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const ModalContent = ({ title, children }) => {
	return (
		<>
			<Divider sx={{ my: 2.5 }} />
			<div className="center_content">
				<Typography variant="h6" component="h3" fontWeight={500} mb={1.2}>
					{title}
				</Typography>

				{children}
			</div>
		</>
	);
};

export default ConfirmOrderModal;
