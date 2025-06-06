import React from "react";
import { Helmet } from "react-helmet";
import { TestDiv } from "./styled";
import { PageWrapper } from "App.styled";

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Main - React Marketplace</title>
			</Helmet>
			<PageWrapper>
				<h1>Main</h1>
			</PageWrapper>
		</>
	);
};

export default HomePage;
