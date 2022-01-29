import "./WiliesCards.scss";
import WilyCard from "./WilyCard";

function WiliesCards(props) {
	return (
		<div className="wilies-container container">
			{
				props.wilies.map(function qstAnswerMapped(wily) {
					return (
						<WilyCard
							key={wily._id}
							wily={wily}
						/>
					);
				})
			}
		</div>
	);
}

export default WiliesCards;