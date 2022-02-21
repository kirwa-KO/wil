import Layout from "../Components/Layouts/Layout";
import WiliesCards from "../Components/Home/WiliesCards/WiliesCards";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import useHttp from "../hooks/useHttp";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import { convertTagsAraayObjsShapetoObjects } from "../utils/Heplers";
import { useParams, useHistory } from "react-router-dom";

let isAlertExistBefore = false;

function OtherUserWilies() {
	const authCtx = useContext(AuthContext);
	const { isLoading, error, sendRequest: sendGetWiliesRequest } = useHttp();
	const [wilies, setWilies] = useState([]);
	const [suggestedTags, setSuggestedTags] = useState([]);
	const { username } = useParams();
	const history = useHistory();

	const getWilies = (data) => {
		setWilies(data.wilies);
	};

	const getTags = (data) => {
		setSuggestedTags(convertTagsAraayObjsShapetoObjects(data.tags));
	};

	useEffect(() => {
		sendGetWiliesRequest(
			{ url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/wilies/${username}` },
			getWilies
		);
		sendGetWiliesRequest(
			{ url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/tags` },
			getTags
		);
	}, []);

	const deleteWilySuccessed = (wilyData) => {
		if (isAlertExistBefore) alert.removeAll();
		alert.show(wilyData.message, { type: "sucess", timeout: 3000 });
		setWilies((prevWilies) => {
			return prevWilies.filter((wily) => wily._id !== wilyData.wily._id);
		});
	};

	const deleteWilyHandler = (wilyId) => {
		sendGetWiliesRequest(
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

	const alert = useAlert();

	if (error) {
		alert.show(error, { type: "error", timeout: 5000 });
		history.push("/");
	}

	return (
		<Layout>
			{isLoading && <LoadingSpinner />}
			<WiliesCards
				deleteWilyHandler={deleteWilyHandler}
				wilies={wilies}
				suggestedTags={suggestedTags}
			/>
		</Layout>
	);
}

export default OtherUserWilies;
