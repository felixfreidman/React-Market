import React, { Suspense } from "react";

import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";

export const App: React.FC = () => {
	return (
		<Suspense fallback={"Loading..."}>
			<PublicRoutes />
			{/* <PrivateRoutes /> */}
		</Suspense>
	);
};

export default App;
