import Layout from "../../../Components/Layouts/Layout";
import WiliesCards from "../../../Components/Home/WiliesCards/WiliesCards";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import useHttp from "../../../hooks/useHttp";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import { convertUsersAraayObjsShapetoObjects, changeUserPlaceinArray } from "../../../utils/Heplers";
import { useRouter } from "next/router";

let isAlertExistBefore = false;

function OtherUserWilies(props) {
	const authCtx = useContext(AuthContext);
	const { isLoading, error, sendRequest: sendGetWiliesRequest } = useHttp();
	const [wilies, setWilies] = useState(props.wilies);
    const [suggestedTags, setSuggestedTags] = useState(props.suggestedTags);
	const router = useRouter();

    useEffect(() => {
        setSuggestedTags(prevSuggestedTags => changeUserPlaceinArray(prevSuggestedTags, authCtx.username, 0));

    }, [])

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
		router.push("/");
	}

	return (
		<Layout>
			{isLoading && <LoadingSpinner />}
			<WiliesCards
				deleteWilyHandler={deleteWilyHandler}
				wilies={wilies}
				suggestedTags={suggestedTags}
                searchByUsers={true}
			/>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const { tagName } = params;
	const responseWilies = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/tag/${tagName}`
	);
	const dataWilies = await responseWilies.json();

	const responseUsers = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/users`
	);

	const dataUsers = await responseUsers.json();

	return {
		props: {
			wilies: dataWilies.wilies,
			suggestedTags: convertUsersAraayObjsShapetoObjects(dataUsers.users),
		},
	};
}

export const getStaticPaths = async (_) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/tags`
	);
	const data = await response.json();
	return {
		fallback: "blocking",
		paths: data.tags.map(tag => ({
			params : {
				tagName: tag.name
			}
		}))
	};
};

export default OtherUserWilies;
