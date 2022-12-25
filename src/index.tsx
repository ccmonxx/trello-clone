import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme } from "./styles/theme";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);
