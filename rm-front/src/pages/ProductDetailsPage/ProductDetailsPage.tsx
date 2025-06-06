import React from "react";
import { Helmet } from "react-helmet";

export const ProductDetailsPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Product Details - React Marketplace</title>
			</Helmet>
			<h1>Product Details</h1>
		</>
	);
};

export default ProductDetailsPage;
