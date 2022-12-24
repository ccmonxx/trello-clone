import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme } from "./styles/theme";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle theme={darkTheme} />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
