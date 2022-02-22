import Layout from "../Components/Layouts/Layout";
import CommunityContent from "../Components/Community/CommunityContent";
// import useHttp from "../hooks/useHttp";
// import { useState, useEffect } from "react";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

function Community(props) {
	// const { isLoading, error, sendRequest: sendGetUsersWiliesRequest } = useHttp();
	// const [usersWilies, setUsersWilies] = useState([]);

	// const getUsersWilies = (data) => {
	// 	setUsersWilies(data.users);
	// };
	// useEffect(() => {
	// 	sendGetUsersWiliesRequest({ url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/users` },
	// 		getUsersWilies
	// 	);
	// }, []);

	return (
		<Layout>
			{/* {isLoading && <LoadingSpinner />} */}
			{ props.usersWilies.length > 0 && <CommunityContent usersWilies={props.usersWilies} /> }
		</Layout>
	);
}


export async function getStaticProps() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_LINK}/feed/users`
	);
	const data = await response.json();

	return {
		props: {
			usersWilies: data.users,
		},
        revalidate: 10
	};
}

export default Community;
