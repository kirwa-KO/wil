import Layout from "../Components/Layouts/Layout";
import MainInputs from "../Components/Home/MainInputs/MainInputs";
import WiliesCards from "../Components/Home/WiliesCards/WiliesCards";
import { useContext, useMemo } from "react";
import AuthContext from "../store/auth-context";
import useHttp from "../hooks/useHttp";
import { useState, useEffect, useRef } from "react";
import { useAlert } from "react-alert";
import { convertTagsAraayObjsShapetoObjects } from "../utils/Heplers";
import LandingPart from "../Components/Home/LandingPart/LandingPart";
// import MarkdownEditor from "../Components/UI/MarkdownEditor";

let isAlertExistBefore = false;

function Home(props) {
	const authCtx = useContext(AuthContext);
	// const { isLoading, error, sendRequest: sendGetWiliesRequest } = useHttp();
	const { error, sendRequest: sendGetWiliesRequest } = useHttp();
	const [wilies, setWilies] = useState(props.wilies);
	const suggestedTags = props.tags;

	const getWilies = (data) => {
		setWilies(data.wilies);
	};
	const mainInputsRef = useRef();

	useEffect(() => {
		if (authCtx.isLoggedIn === true) {
			sendGetWiliesRequest(
				{
					url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/wilies`,
					headers: {
						Authorization: `Bearer ${authCtx.token}`,
					},
				},
				getWilies
			);
		}
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
					url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/wily`,
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
		<Layout>
			{/* {isLoading && <LoadingSpinner />} */}
			{!authCtx.isLoggedIn && (
				<>
					<LandingPart />
				</>
			)}
			{authCtx.isLoggedIn && (
				<MainInputs
					ref={mainInputsRef}
					addWilyHandler={addWilyHandler}
					suggestedTags={suggestedTags}
				/>
			)}
			{wilies.length > 0 && (
				<WiliesCards
					deleteWilyHandler={deleteWilyHandler}
					wilies={wilies}
					suggestedTags={suggestedTags}
				/>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const responseWilies = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/wilies/public`
	);

    
	const dataWilies = await responseWilies.json();

	const responseTags = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/tags`
	);
	const dataTags = await responseTags.json();

	return {
		props: {
			wilies: dataWilies.wilies,
			tags: convertTagsAraayObjsShapetoObjects(dataTags.tags),
		},
		revalidate: 60
	};
}

export default Home;
