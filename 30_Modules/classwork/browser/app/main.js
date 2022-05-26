// import {
// 	logInfo,
// 	logWarn,
// 	alertInfo,
// 	alertWarn,
// 	clear,
// } from "../helpers/index.js";

// import * as Components from "../components/index.js";

// logInfo(Components.Icon);
// logWarn(Components.Button);
// alertInfo(new Date().toISOString());
// alertWarn(new Error("Thrown"));

// clear();

import { HomePage } from "../pages/home-page.js";

document.body.replaceChildren(HomePage());

document.getElementById("blog").addEventListener("click", async () => {
	const { BlogPage } = await import("../pages/blog-page.js");

	document.body.replaceChildren(
		BlogPage(
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel neque odit nobis, recusandae culpa officiis labore quidem nam officia esse praesentium aut nihil consequatur modi voluptas dolores assumenda error expedita."
		)
	);
});
