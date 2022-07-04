import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { InternalizationProvider } from "./contexts/internalization";

ReactDOM.render(
	<InternalizationProvider>
		<App />
	</InternalizationProvider>,
	document.getElementById("root")
);
