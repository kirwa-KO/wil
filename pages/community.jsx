import Layout from "../Components/Layouts/Layout";
import CommunityContent from "../Components/Community/CommunityContent";
import useHttp from "../hooks/useHttp";
import { useState, useEffect } from "react";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

function Community() {
	const { isLoading, error, sendRequest: sendGetUsersWiliesRequest } = useHttp();
	const [usersWilies, setUsersWilies] = useState([]);

	const getUsersWilies = (data) => {
		setUsersWilies(data.users);
	};
	useEffect(() => {
		sendGetUsersWiliesRequest({ url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/users` },
			getUsersWilies
		);
	}, []);

	return (
		<Layout>
			{isLoading && <LoadingSpinner />}
			{ usersWilies.length > 0 && <CommunityContent usersWilies={usersWilies} /> }
		</Layout>
	);
}

export default Community;
