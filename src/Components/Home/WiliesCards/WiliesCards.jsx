import "./WiliesCards.scss";
import WilyCard from "./WilyCard";

function WiliesCards(props) {
	return (
		<div className="wilies-container container">
			<WilyCard qst="What is Wil?" answer="Wil is an open-source, Node.js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks." />
			<WilyCard qst="What is Wil?" answer="Wil is an open-source, Node.js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks." />
			<WilyCard qst="What is Wil?" answer="Wil is an open-source, Node.js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks." />
			<WilyCard qst="What is Wil?" answer="Wil is an open-source, Node.js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks." />
		</div>
	);
}

export default WiliesCards;