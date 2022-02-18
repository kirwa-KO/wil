import "./TeamCard.scss";
import Github from "../../assets/icons/github.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";

function TeamCard(props) {
	return (
		<div className="col-6 team-container">
			<div className=" team-card">
				<img width={120} height={120} src={props.img} className="rounded-circle img-fluid" alt="" />
				<h5 className="text-center mt-4">{props.name}</h5>
				<p className="text-center">{props.role}</p>
				<div className="social-media">
					<a href={props.github} target="_blank" rel="noopener noreferrer">
						<img src={Github} />
					</a>
					<a href={props.twitter} target="_blank" rel="noopener noreferrer">
						<img src={Twitter} />
					</a>
					<a href={props.instagram} target="_blank" rel="noopener noreferrer">
						<img src={Instagram} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;