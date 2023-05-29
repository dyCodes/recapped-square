import {
	Button,
	Container,
	Divider,
	InputAdornment,
	List,
	ListItem,
	TextField,
	Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Layout from "../components/Layout";
import { useState } from "react";
import ConfirmOrderModal from "../components/ConfirmOrderModal";

const marketList = [
	{
		id: 1,
		name: "Alex Okekan",
		quantity: "> 50 large bottles",
		location: "Janaweri Market",
	},
	{
		id: 2,
		name: "Marie Abbott",
		quantity: "< 50 small bottles",
		location: "Jakande Market",
	},
	{
		id: 3,
		name: "Bill Harrison",
		quantity: "> 50 large bottles",
		location: "Alaba Market",
	},
	{
		id: 2,
		name: "Marie Abbott",
		quantity: "< 50 small bottles",
	},
	{
		id: 3,
		name: "Bill Harrison",
		quantity: "> 50 large bottles",
		location: "Jakande Market",
	},
	{
		id: 2,
		name: "Marie Abbott",
		quantity: "< 50 small bottles",
		location: "Jakande Market",
	},
	{
		id: 3,
		name: "Bill Harrison",
		quantity: "> 50 large bottles",
		location: "Janaweri Market",
	},
];

const MarketPlace = () => {
	const [confirmModal, setConfirmModal] = useState({ status: false, id: null });

	const handleConfirm = ({ id }) => {
		setConfirmModal({ status: true, id: id });
	};

	const handleClose = () => {
		setConfirmModal({ status: false, id: null });
	};

	const handleDonate = () => {
		console.log("Donated");
		// Go to transactions page
		window.location.href = "/transactions";
	};

	return (
		<Layout page="MarketPlace">
			<Container maxWidth="sm" className="container">
				<Typography variant="h5" component="h1" align="center" mb={3} fontWeight="bold">
					Market Place
				</Typography>

				<form className="searchForm">
					<TextField
						fullWidth
						id="searchInput"
						size="small"
						placeholder="Search by name or quantity"
						type="search"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</form>

				<List sx={{ width: "100%", mt: 2 }}>
					{marketList.map((item, index) => (
						<MarketListItem key={index} data={item} handleConfirm={handleConfirm} />
					))}
				</List>
			</Container>

			{confirmModal.status && (
				<ConfirmOrderModal
					confirmModal={confirmModal}
					handleDonate={handleDonate}
					handleClose={handleClose}
				/>
			)}
		</Layout>
	);
};

const MarketListItem = ({ data, handleConfirm }) => {
	return (
		<>
			<ListItem className="listItem">
				<div>
					<h5 className="_name">{data.name}</h5>
					<span style={{ fontWeight: 500, color: "#333" }}>{data.quantity}</span>
					<span>{data.location}</span>
				</div>

				<Button variant="outlined" size="small" onClick={() => handleConfirm(data.id)}>
					Donate
				</Button>
			</ListItem>

			<Divider />
		</>
	);
};

export default MarketPlace;
