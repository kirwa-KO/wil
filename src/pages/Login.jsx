import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import LoginInputs from "../Components/Auth/Login/LoginInputs";
import useHttp from "../hooks/useHttp";
import { useAlert } from "react-alert";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import { useHistory } from "react-router-dom";

let isAlertExistBefore = false;

function Login() {
	const authCtx = useContext(AuthContext);
	const { isLoading, error, sendRequest: sendSignupRequest } = useHttp();
	
	const alert = useAlert();
	const history = useHistory();
	
	const loginSuccessed = (userData) => {
		if (isAlertExistBefore) alert.removeAll();
		authCtx.login(userData.token, userData.userId, userData.username);
		history.push("/");
	};

	const submitLoginFormHandler = (email, password, isRemberMeChecked) => {
		sendSignupRequest(
			{
				url: `${import.meta.env.VITE_API_LINK}/auth/login`,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: { email, password, rememberMe: isRemberMeChecked },
			},
			loginSuccessed
		);
	};

	if (error) {
		if (isAlertExistBefore) alert.removeAll();
		alert.show(error, { type: "error" });
		isAlertExistBefore = true;
	}

	return (
		<Layout
			lightMode={authCtx.lightMode}
			showParticuler={authCtx.showParticuler}
		>
			<NavBar />
			<ParticlesComponent
				showParticuler={authCtx.showParticuler}
				lightMode={authCtx.lightMode}
			/>
			{isLoading && <LoadingSpinner />}
			<LoginInputs onSubmitForm={submitLoginFormHandler} />
		</Layout>
	);
}

export default Login;
