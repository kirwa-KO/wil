import Layout from "../Components/Layouts/Layout";
import CommunityContent from "../Components/Community/CommunityContent";

function Community(props) {
	return (
		<Layout>
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
