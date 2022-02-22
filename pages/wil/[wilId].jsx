import Layout from "../../Components/Layouts/Layout";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import WilContent from "../../Components/SingleWil/ShowSingleWil/WilContent";
import useHttp from "../../hooks/useHttp";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";
import { useAlert } from "react-alert";
import ErrorContainer from "../../Components/UI/ErrorContainer";
import { useRouter } from 'next/router';

function ShowSingleWil() {
	const authCtx = useContext(AuthContext);
    const {token} = authCtx;
	const { isLoading, error, sendRequest: sendGetDeleteWilyRequest } = useHttp();
	const [wily, setWily] = useState({});
	
	const alert = useAlert();
	
	const router = useRouter();

	const { wilId } = router.query;

	const getWily = (data) => {
		setWily(data.wily);
	};

	useEffect(() => {
		if (wilId) {
			sendGetDeleteWilyRequest(
				{
					url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/wily/${wilId}`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
				getWily
			);
		}
	}, [wilId, token, sendGetDeleteWilyRequest]);

	const deleteWilySuccessed = (wilyData) => {
		alert.show(wilyData.message, { type: "sucess", timeout: 3000 });
		router.push("/");
	};

	const deleteWilyHandler = (wilyId) => {
		sendGetDeleteWilyRequest(
			{
				url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/wily/${wilyId}`,
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
