import React, { useState, useCallback, useEffect } from "react";

let logoutTimer;

const AuthContext = React.createContext({
	showParticuler: false,
	lightMode: false,
	token: "",
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
	toggleShowParticules: () => {},
	toggleLightMode: () => {},
});

const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();

	const remainingDuration = adjExpirationTime - currentTime;

	return remainingDuration;
};

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem("token");
	const storedExpirationDate = localStorage.getItem("expirationTime");
	const remainingTime = calculateRemainingTime(storedExpirationDate);

	// if (remainingTime <= 3600) {
	// 	localStorage.removeItem("token");
	// 	localStorage.removeItem("expirationTime");
	// 	return null;
	// }

	return {
		token: storedToken,
		// duration: remainingTime,
		// you need to change this to the remaining time
		duration: storedExpirationDate,
	};
};

const retrieveStoredParams = () => {
	const storedShowParticules = localStorage.getItem("showParticuler");
	const storedLightMode = localStorage.getItem("lightMode");
	return {
		showParticules: storedShowParticules === "true",
		lightMode: storedLightMode === "true",
	};
};

export const AuthContextProvider = (props) => {
	const tokenData = retrieveStoredToken();
	const paramsData = retrieveStoredParams();

	let initialToken;
	if (tokenData) {
		initialToken = tokenData.token;
	}

	const [token, setToken] = useState(initialToken);
	const [showParticuler, setShowParticuler] = useState(
		paramsData.showParticules
	);

	const [lightMode, setLightMode] = useState(paramsData.lightMode);

	const userIsLoggedIn = !!token;

	const logoutHandler = useCallback(() => {
		setToken(null);
		localStorage.removeItem("token");
		localStorage.removeItem("expirationTime");
		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	}, []);

	const loginHandler = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem("token", token);
		localStorage.setItem("expirationTime", expirationTime);
		const remainingTime = calculateRemainingTime(expirationTime);
		logoutTimer = setTimeout(logoutHandler, remainingTime);
	};

	// useEffect(() => {
	// 	if (tokenData) {
	// 		logoutTimer = setTimeout(logoutHandler, tokenData.duration);
	// 	}
	// }, [tokenData, logoutHandler]);

	const toggleShowParticulesHandler = () => {
		setShowParticuler((prevState) => {
			localStorage.setItem("showParticuler", !prevState);
			return !prevState;
		});
	};

	const toggleLightModeHandler = () => {
		setLightMode((prevState) => {
			localStorage.setItem("lightMode", !prevState);
			return !prevState;
		});
	};

	const contextValue = {
		token: token,
		showParticuler: showParticuler,
		lightMode: lightMode,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
		toggleShowParticules: toggleShowParticulesHandler,
		toggleLightMode: toggleLightModeHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
