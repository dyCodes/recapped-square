import { Typography } from "@mui/material";
import Layout from "../components/Layout";

const ErrorPage = () => {
	return (
		<Layout page="Error" title="[404] Page Not Found">
			<Typography variant="h2" component="h1" mt={8} align="center" sx={{ fontWeight: "bold" }}>
				Error Page
			</Typography>
			<p style={{ textAlign: "center", fontSize: "24px" }}>[ 404 ] Page Not Found</p>
		</Layout>
	);
};

export default ErrorPage;
