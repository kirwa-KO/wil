import { useRouter } from 'next/router';
import Image from 'next/image';

function UserCard(props) {

	const router = useRouter();;

	const handleClick = () => {
		router.push(`/user/${props.username}/wilies`);
	};

	return (
		<div className="col-lg-4 col-md-6">
			<div className="user-card bg-dark-darkmode" onClick={handleClick}>
				<Image width={64} height={64} src={`https://avatars.dicebear.com/api/adventurer/${props.avatar}.svg`} alt="" />
				<div className="user-info">
					<h4>{props.username}</h4>
					<p>🔥 Current wilies: {props.wiliesCount}</p>
				</div>
			</div>
		</div>
	);
}

export default UserCard;