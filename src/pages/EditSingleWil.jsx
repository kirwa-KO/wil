import Layout from "../Components/Layouts/Layout";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../store/auth-context";
import { useParams } from "react-router-dom";
import InputsContent from "../Components/SingleWil/EditSingleWil/InputsContent";
import useHttp from "../hooks/useHttp";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import ErrorContainer from "../Components/UI/ErrorContainer";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

function EditSingleWil() {
	const authCtx = useContext(AuthContext);
	const { wilId } = useParams();

	const { isLoading, error, sendRequest: sendGetEditWilyRequest } = useHttp();
	const [wily, setWily] = useState({});

	const alert = useAlert();

	const history = useHistory();

	const getWily = (data) => {
		// console.log(data)
		setWily(data.wily)
	};

	useEffect(() => {
		sendGetEditWilyRequest(
			{
				url: `${import.meta.env.VITE_API_LINK}/feed/wily/${wilId}`,
				headers: {
					Authorization: `Bearer ${authCtx.token}`,
				},
			},
			getWily
		);
	}, []);

	const wilyEditedSuccessed = (wilyData) => {
		alert.show(wilyData.message, { type: "sucess", timeout: 3000  });
		history.push(`/wil/${wilId}`);
	}

	const editWilyHandler = (question, answer, isPublic, tags) => {
		sendGetEditWilyRequest(
			{
				url: `${import.meta.env.VITE_API_LINK}/feed/wily/${wilId}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authCtx.token}`,
				},
				method: "PUT",
				body: {
					question,
					answer,
					isPublic,
					tags
				},
			},
			wilyEditedSuccessed
		);
	};

	if (error) {
		alert.show(error, { type: "error", timeout: 5000 });
	}


	return (
		<Layout>
			{ error && <ErrorContainer errorMessage={error} /> }
			{ !error && isLoading && <LoadingSpinner /> }
			{ !error && !isLoading && <InputsContent wily={wily} onEditWily={editWilyHandler} /> }
			
		</Layout>
	);
}

export default EditSingleWil;
