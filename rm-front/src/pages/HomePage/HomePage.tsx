import React from "react";
import { Helmet } from "react-helmet";
import { ProductGroup, ProductGroupContainer } from "./styled";
import { PageWrapper } from "App.styled";
import { dummyProducts } from "pages/dummyProducts";

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Main - React Marketplace</title>
			</Helmet>
			<PageWrapper>
				<ProductGroup>
					<h2>Recommended stuff</h2>

					<ProductGroupContainer>
						{dummyProducts.map((product) => (
							<ProductCard {...product} key={product.id} />
						))}
					</ProductGroupContainer>
				</ProductGroup>
			</PageWrapper>
		</>
	);
};

export default HomePage;
