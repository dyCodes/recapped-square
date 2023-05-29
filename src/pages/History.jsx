import { useContext, useEffect } from "react";
import { Container, Divider, List, ListItem, Typography } from "@mui/material";
import Layout from "../components/Layout";
import { AppContext } from "../context/AppContext";

const History = () => {
	const { HistoryList } = useContext(AppContext);

	// Scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Layout page="History">
			<Container maxWidth="sm" className="container">
				<Typography variant="h5" component="h1" align="center" mb={3} fontWeight="bold">
					Transaction list
				</Typography>

				{/* <List sx={{ width: "100%", mt: 2 }}>
					{HistoryList.map((item, index) => (
						<>
							<ListItem className="listItem">
								<div>
									<h5 className="_name">{item.name}</h5>
									<span style={{ fontWeight: 500, color: "#333" }}>{item.quantity} bottles donated</span>
									<span>Status: {item.status}</span>
								</div>
							</ListItem>
							<Divider />
						</>
					))}
				</List> */}
			</Container>
		</Layout>
	);
};

export default History;
