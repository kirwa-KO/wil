import "./WiliesCards.scss";
import WilyCard from "./WilyCard";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

function WiliesCards(props) {
	
	const authCtx = useContext(AuthContext);

	return (
		<div className="wilies-container container">
			{
				props.wilies.map(function qstAnswerMapped(wily) {
					return (
						<WilyCard
							key={wily._id}
							wily={wily}
							isLoggedIn={authCtx.isLoggedIn}
							authenticatedUsername={authCtx.username}
						/>
					);
				})
			}
		</div>
	);
}

export default WiliesCards;