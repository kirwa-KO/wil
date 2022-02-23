import React, { useState, useCallback } from "react";

const AuthContext = React.createContext({
	showParticuler: false,
	lightMode: false,
	token: "",
	userId: "",
	username: "",
	isLoggedIn: false,
	login: (token) => { },
	logout: () => { },
	toggleShowParticules: () => { },
	toggleLightMode: () => { },
});

const retrieveStoredUserData = () => {

	if (typeof window !== 'undefined') {
		const storedToken = localStorage.getItem("token");
		const storedUserId = localStorage.getItem("userId");
		const storedUsername = localStorage.getItem("username");

		return {
			token: storedToken,
			userId: storedUserId,
			username: storedUsername
		};
	}
};

const retrieveStoredParams = () => {
	if (typeof window !== 'undefined') {
		const storedShowParticules = localStorage.getItem("showParticuler");
		const storedLightMode = localStorage.getItem("lightMode");
		return {
			showParticules: storedShowParticules === "true",
			lightMode: storedLightMode === "true",
		};
	}
};

export const AuthContextProvider = (props) => {
	if (typeof window !== 'undefined') {
		const storedData = retrieveStoredUserData();
		const paramsData = retrieveStoredParams();

		let initialToken;
		let initialUserId;
		let initialUsername;
		if (storedData) {
			initialToken = storedData.token;
			initialUserId = storedData.userId;
			initialUsername = storedData.username;
		}

		const [token, setToken] = useState(initialToken);
		const [userId, setUserId] = useState(initialUserId);
		const [username, setUsername] = useState(initialUsername);
		const [showParticuler, setShowParticuler] = useState(
			paramsData.showParticules
		);

		const [lightMode, setLightMode] = useState(paramsData.lightMode);

		const userIsLoggedIn = !!token;

		const logoutHandler = useCallback(() => {
			setToken(null);
			setUserId(null);
			setUsername(null);
			localStorage.removeItem("token");
			localStorage.removeItem("userId");
			localStorage.removeItem("username");
		}, []);

		const loginHandler = (token, userId, username) => {
			setToken(token);
			setUserId(userId);
			setUsername(username);
			localStorage.setItem("token", token);
			localStorage.setItem("userId", userId);
			localStorage.setItem("username", username);
		};

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
			userId: userId,
			username: username,
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
	}
	return null;
};

export default AuthContext;
