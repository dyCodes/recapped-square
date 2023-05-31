import { useContext, useEffect, useState } from "react";
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
import ConfirmOrderModal from "../components/ConfirmOrderModal";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
	const { marketPlaceList, setHistoryList } = useContext(AppContext);
	const [confirmModal, setConfirmModal] = useState({ status: false, id: null });
	const [value, setValue] = useState(50);
	const navigate = useNavigate();

	// Scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleConfirm = (id) => {
		setConfirmModal({ status: true, id: id });
	};

	const handleClose = () => {
		setConfirmModal({ status: false, id: null });
		setValue(50);
	};

	const handleDonate = () => {
		const data = marketPlaceList.find((item) => item.id === confirmModal.id);
		// Create new history data
		const newHistoryData = {
			...data,
			quantity: value,
			points: value / 10,
			status: "Successful",
			date: new Date().toLocaleDateString(),
		};

		setHistoryList((prev) => [newHistoryData, ...prev]);
		navigate("/transactions", { state: newHistoryData });
	};

	return (
		<Layout page="MarketPlace">
			<Container maxWidth="sm" className="container">
				<Typography variant="h5" component="h1" align="center" mb={3} fontWeight="bold">
					Market Place
				</Typography>

				<div className="searchForm">
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
				</div>

				<List sx={{ width: "100%", mt: 2 }}>
					{marketPlaceList.map((item, index) => (
						<MarketListItem key={index} data={item} handleConfirm={handleConfirm} />
					))}
				</List>
			</Container>

			{confirmModal.status && (
				<ConfirmOrderModal
					confirmModal={confirmModal}
					handleDonate={handleDonate}
					handleClose={handleClose}
					value={value}
					setValue={setValue}
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
