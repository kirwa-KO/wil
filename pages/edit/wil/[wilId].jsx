import Layout from "../../../Components/Layouts/Layout";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../store/auth-context";
import InputsContent from "../../../Components/SingleWil/EditSingleWil/InputsContent";
import useHttp from "../../../hooks/useHttp";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import ErrorContainer from "../../../Components/UI/ErrorContainer";
import { convertTagsAraayObjsShapetoObjects } from "../../../utils/Heplers";
import { useAlert } from "react-alert";
import { useRouter } from 'next/router';


function EditSingleWil() {
	const authCtx = useContext(AuthContext);
	const router = useRouter();

	const { wilId } = router.query;

	const { isLoading, error, sendRequest: sendGetEditWilyRequest } = useHttp();
	const [wily, setWily] = useState({});
	const [suggestedTags, setSuggestedTags] = useState([]);

	const alert = useAlert();


	const getWily = (data) => {
		// console.log(data)
		setWily(data.wily)
	};

    const getTags = (data) => {
		setSuggestedTags(convertTagsAraayObjsShapetoObjects(data.tags));
	};

	useEffect(() => {
		sendGetEditWilyRequest(
			{
				url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/wily/${wilId}`,
				headers: {
					Authorization: `Bearer ${authCtx.token}`,
				},
			},
			getWily
		);
        sendGetEditWilyRequest(
			{ url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/tags` },
			getTags
		);
	}, []);

	const wilyEditedSuccessed = (wilyData) => {
		alert.show(wilyData.message, { type: "sucess", timeout: 3000 });
		router.push(`/wil/${wilId}`);
	}

	const editWilyHandler = (question, answer, isPublic, tags) => {
		sendGetEditWilyRequest(
			{
				url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/wily/${wilId}`,
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
			{error && <ErrorContainer errorMessage={error} />}
			{!error && isLoading && <LoadingSpinner />}
			{!error && !isLoading && <InputsContent
										wily={wily}
										onEditWily={editWilyHandler}
										/>}

		</Layout>
	);
}

export default EditSingleWil;
