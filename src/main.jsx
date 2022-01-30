import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const options = {
	// you can also just use 'bottom center'
	position: positions.TOP_CENTER,
	// timeout: 10000,
	offset: "50px",
	transition: transitions.SCALE,
};

const CustomeAlertTemplate = ({ options, message }) => {
	let alertClasses = "alert ";
	if (options.type == "error")
		alertClasses = "error-alert";
	else
		alertClasses = "success-alert";
	return (
	<div className="alert">
		<div className={alertClasses}>{message}</div>
	</div>
	);
};
ReactDOM.render(
	<AuthContextProvider>
		<AlertProvider template={CustomeAlertTemplate} {...options}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AlertProvider>
	</AuthContextProvider>,
	document.getElementById("root")
);
