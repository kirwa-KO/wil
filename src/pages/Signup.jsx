import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import SignupInputs from "../Components/Auth/Signup/SignupInputs";
import useHttp from "../hooks/useHttp";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

let isAlertExistBefore = false;

function Signup() {
	const authCtx = useContext(AuthContext);
	const { isLoading, error, sendRequest: sendSignupRequest } = useHttp();

	const history = useHistory();

	const alert = useAlert();

	const signupSuccessed = (userData) => {
		if (isAlertExistBefore) alert.removeAll();
		alert.show(userData.message, { type: "success", timeout: 2000 });
		history.push("/login");
	};

	const submitSignupFormHandler = (username, email, password) => {
		sendSignupRequest(
			{
				url: `${import.meta.env.VITE_API_LINK}/auth/signup`,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: { username, email, password },
			},
			signupSuccessed
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
			<SignupInputs onSubmitForm={submitSignupFormHandler} />
		</Layout>
	);
}

export default Signup;
