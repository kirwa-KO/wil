import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import MainInputs from "../Components/Home/MainInputs/MainInputs";
import WiliesCards from "../Components/Home/WiliesCards/WiliesCards";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import SearchFilter from "../Components/UI/SearchFilter";
import useHttp from "../hooks/useHttp";
import { useState, useEffect, useRef } from "react";
import { useAlert } from "react-alert";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import { convertTagsAraayObjsShapetoObjects } from "../utils/Heplers";

let isAlertExistBefore = false;

function Home() {
	const authCtx = useContext(AuthContext);
	const { isLoading, error, sendRequest: sendGetWiliesRequest } = useHttp();
	const [wilies, setWilies] = useState([]);
	const [suggestedTags, setSuggestedTags] = useState([]);

	const getWilies = (data) => {
		setWilies(data.wilies);
	};

	const getTags = (data) => {
		setSuggestedTags(convertTagsAraayObjsShapetoObjects(data.tags));
	};

	const mainInputsRef = useRef();

	useEffect(() => {
		if (authCtx.isLoggedIn === false) {
			sendGetWiliesRequest(
				{ url: `${import.meta.env.VITE_API_LINK}/feed/wilies/public` },
				getWilies
			);
		} else {
			sendGetWiliesRequest(
				{
					url: `${import.meta.env.VITE_API_LINK}/feed/wilies`,
					headers: {
						Authorization: `Bearer ${authCtx.token}`,
					},
				},
				getWilies
			);
		}
		sendGetWiliesRequest(
			{ url: `${import.meta.env.VITE_API_LINK}/feed/tags` },
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

	const addWilySuccessed = (wilyData) => {
		mainInputsRef.current.resetInputs();
		if (isAlertExistBefore) alert.removeAll();
		alert.show(wilyData.message, { type: "sucess", timeout: 3000 });
		setWilies((prevWilies) => {
			var newWilies = [...prevWilies, wilyData.wily];
			return newWilies;
		});
	};

	const addWilyHandler = (question, answer, isPublic, tags) => {
		sendGetWiliesRequest(
			{
				url: `${import.meta.env.VITE_API_LINK}/feed/wily`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authCtx.token}`,
				},
				method: "POST",
				body: {
					question,
					answer,
					isPublic,
					tags,
				},
			},
			addWilySuccessed
		);
	};

	const alert = useAlert();

	if (error) {
		alert.show(error, { type: "error", timeout: 5000 });
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
			<MainInputs ref={mainInputsRef} addWilyHandler={addWilyHandler} />
			<WiliesCards
				deleteWilyHandler={deleteWilyHandler}
				wilies={wilies}
				suggestedTags={suggestedTags}
			/>
		</Layout>
	);
}

export default Home;
