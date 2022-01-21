import "./WiliesCards.scss";
import WilyCard from "./WilyCard";
import QstsData from "../../../data/qstsAnswers.json";

function WiliesCards(props) {
	return (
		<div className="wilies-container container">
			{
				QstsData.data.map(function qstAnswerMapped(qstAnswer) {
					return (
						<WilyCard
							key={qstAnswer.id}
							qst={qstAnswer.qst}
							answer={qstAnswer.answer}
						/>
					);
				})
			}
		</div>
	);
}

export default WiliesCards;