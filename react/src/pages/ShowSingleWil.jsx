import Layout from "../Components/Layouts/Layout";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../store/auth-context";
import WilContent from "../Components/SingleWil/ShowSingleWil/WilContent";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import { useAlert } from "react-alert";
import ErrorContainer from "../Components/UI/ErrorContainer";
import { useHistory } from "react-router-dom";

function ShowSingleWil() {
	const authCtx = useContext(AuthContext);
	const { wilId } = useParams();
	const { isLoading, error, sendRequest: sendGetDeleteWilyRequest } = useHttp();
	const [wily, setWily] = useState({});

	const alert = useAlert();

	const history = useHistory();

	const getWily = (data) => {
		setWily(data.wily);
	};

	useEffect(() => {
		sendGetDeleteWilyRequest(
			{
				url: `${import.meta.env.VITE_API_LINK}/feed/wily/${wilId}`,
				headers: {
					Authorization: `Bearer ${authCtx.token}`,
				},
			},
			getWily
		);
	}, []);

	const deleteWilySuccessed = (wilyData) => {
		alert.show(wilyData.message, { type: "sucess", timeout: 3000 });
		history.push("/");
	};

	const deleteWilyHandler = (wilyId) => {
		sendGetDeleteWilyRequest(
			{
				url: `${import.meta.env.VITE_API_LINK}/feed/wily/${wilyId}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authCtx.token}`,
				},
				method: "DELETE",
			},
			deleteWilySuccessed
		);
	};

	if (error) {
		alert.show(error, { type: "error", timeout: 5000 });
	}

	return (
		<Layout>
			{error && <ErrorContainer errorMessage={error} />}
			{!error && isLoading && <LoadingSpinner />}
			{!error && !isLoading && (
				<WilContent
					authenticatedUsername={authCtx.username}
					wily={wily}
					deleteWilyHandler={deleteWilyHandler}
				/>
			)}
		</Layout>
	);
}

export default ShowSingleWil;
