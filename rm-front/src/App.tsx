import React, { Suspense } from "react";

// import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";

import Header from "features/Header";
import { AppStyles, Footer } from "App.styled";

export const App: React.FC = () => {
	return (
		<>
			<AppStyles />
			<Header />

			<Suspense fallback={"Loading..."}>
				<PublicRoutes />
				{/* <PrivateRoutes /> */}
			</Suspense>

			<Footer>
				<div>Freidman Solutions™ React Market</div>
			</Footer>
		</>
	);
};

export default App;
