import Github from "../../assets/icons/Github.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Image from "next/image";

function TeamCard(props) {
	return (
		<div className="col-md-6 team-container">
			<div className="team-card mt-4">
				<Image width={120} height={120} src={props.img} className="rounded-circle img-fluid" alt="" />
				<h5 className="text-center mt-4">{props.name}</h5>
				<p className="text-center">{props.role}</p>
				<div className="social-media">
					{props.github && <a href={props.github} target="_blank" rel="noopener noreferrer">
						<Github />
					</a>}
					{props.twitter && <a href={props.twitter} target="_blank" rel="noopener noreferrer">
						<Twitter />
					</a>}
					{props.instagram && <a href={props.instagram} target="_blank" rel="noopener noreferrer">
						<Instagram />
					</a>
					}
				</div>
			</div>
		</div>
	);
};

export default TeamCard;