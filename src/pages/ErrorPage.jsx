import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Layout from "../components/Layout";

const ErrorPage = () => {
	let error = useRouteError();

	return (
		<Layout page="Error" title={error.status + " Error"}>
			<Typography variant="h2" component="h1" mt={8} align="center" sx={{ fontWeight: "bold" }}>
				Error Page
			</Typography>
			<p style={{ textAlign: "center", fontSize: "24px" }}>
				[ {error.status} ] {error.statusText}
			</p>
		</Layout>
	);
};

export default ErrorPage;
