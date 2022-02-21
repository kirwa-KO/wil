import "./CommunityContent.scss";
import UserCard from "./UserCard";

function CommunityContent(props) {
	return (
		<div className="community-container">
			<div className="container content">
				<div className="row">
					{
						props.usersWilies && props.usersWilies.map((user) => {
							return <UserCard key={user._id} username={user.username} wiliesCount={user.wilies.length} />
						})
					}
				</div>
			</div>
		</div>
	);
}

export default CommunityContent;
