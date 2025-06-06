//
// Types Declaration
//

type Path = {
	[k: string]: string;
};

//
// App paths
//

export const pathsPublic: Path = {
	home: "/",
	productDetails: "/product/:idOrSlug",
};

export const pathsPrivate: Path = {
	accountSettings: "/account-settings",
};

export const paths: Path = Object.assign({}, pathsPublic, pathsPrivate);

//
//  Check if inouted path
//

export const checkPathMatch = (pathname: string, paths: Path) => {
	let isMatch = false;

	const allPaths = Object.keys(paths).map((key) => paths[key]);
	const pathFirstSection = pathname.split("/")[1];
	allPaths.forEach((path) => {
		if (path.slice(1) === pathFirstSection) isMatch = true;
	});

	return isMatch;
};
