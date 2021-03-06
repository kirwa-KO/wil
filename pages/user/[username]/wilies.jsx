import Layout from "../../../Components/Layouts/Layout";
import WiliesCards from "../../../Components/Home/WiliesCards/WiliesCards";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../store/auth-context";
import useHttp from "../../../hooks/useHttp";
import { useAlert } from "react-alert";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import { convertTagsAraayObjsShapetoObjects } from "../../../utils/Heplers";
import { useRouter } from "next/router";

let isAlertExistBefore = false;

function OtherUserWilies(props) {
	const authCtx = useContext(AuthContext);
	const { isLoading, error, sendRequest: sendGetWiliesRequest } = useHttp();
	const [wilies, setWilies] = useState(props.wilies);
	const router = useRouter();

    const { username } = router.query;

	const deleteWilySuccessed = (wilyData) => {
		if (isAlertExistBefore) alert.removeAll();
		alert.show(wilyData.message, { type: "sucess", timeout: 3000 });
		setWilies((prevWilies) => {
			return prevWilies.filter((wily) => wily._id !== wilyData.wily._id);
		});
	};

    const getWilies = (data) => {
		setWilies(data.wilies);
	};

	useEffect(() => {
        if (authCtx.isLoggedIn === true && username == authCtx.username) {
            sendGetWiliesRequest(
                { 
                    url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/wilies/${username}`,
                    headers: {
                        Authorization: `Bearer ${authCtx.token}`,
                    }
            },
                getWilies
            );
        }
	}, []);

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
				suggestedTags={props.suggestedTags}
			/>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const { username } = params;
	const responseWilies = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/wilies/${username}`
	);
	const dataWilies = await responseWilies.json();

	const responseTags = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/tags`
	);
	const dataTags = await responseTags.json();

	return {
		props: {
			wilies: dataWilies.wilies,
			suggestedTags: convertTagsAraayObjsShapetoObjects(dataTags.tags),
		},
	};
}

export const getStaticPaths = async (_) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/users`
	);
	const data = await response.json();
	return {
		fallback: "blocking",
		paths: data.users.map(user => ({
			params : {
				username: user.username
			}
		}))
	};
};

export default OtherUserWilies;
