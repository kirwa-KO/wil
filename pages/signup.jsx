import Layout from "../Components/Layouts/Layout";
import SignupInputs from "../Components/Auth/Signup/SignupInputs";
import useHttp from "../hooks/useHttp";
import { useAlert } from "react-alert";
import { useRouter } from 'next/router';
import LoadingSpinner from "../Components/UI/LoadingSpinner";

let isAlertExistBefore = false;

function Signup() {
	const { isLoading, error, sendRequest: sendSignupRequest } = useHttp();

	const router = useRouter();;

	const alert = useAlert();

	const signupSuccessed = (userData) => {
		if (isAlertExistBefore) alert.removeAll();
		alert.show(userData.message, { type: "success", timeout: 2000 });
		router.push("/login");
	};

	const submitSignupFormHandler = (username, email, password) => {
		sendSignupRequest(
			{
				url: `${process.env.NEXT_PUBLIC_API_LINK}/auth/signup`,
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
		<Layout>
			{isLoading && <LoadingSpinner />}
			<SignupInputs onSubmitForm={submitSignupFormHandler} />
		</Layout>
	);
}

export default Signup;
