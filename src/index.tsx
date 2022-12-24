import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme } from "./styles/theme";
import { RecoilRoot } from "recoil";

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<GlobalStyle theme={darkTheme} />
			<App />
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);
