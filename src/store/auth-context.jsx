import React, { useState, useCallback } from "react";

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

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem("token");
	// localStorage.removeItem("token");
	return {
		token: storedToken
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
	const [showParticuler, setShowParticuler] = useState(paramsData.showParticules);
	const [lightMode, setLightMode] = useState(paramsData.lightMode);

	const userIsLoggedIn = !!token;

	const logoutHandler = useCallback(() => {
		setToken(null);
		localStorage.removeItem("token");
	}, []);

	const toggleShowParticulesHandler = () => {
		setShowParticuler(prevState => {
			localStorage.setItem("showParticuler", !prevState);
			return (!prevState);
		});
	}
	
	const toggleLightModeHandler = () => {
		setLightMode(prevState => {
			localStorage.setItem("lightMode", !prevState);
			return (!prevState);
		});
	}

	const loginHandler = (token) => {
		setToken(token);
		localStorage.setItem("token", token);
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