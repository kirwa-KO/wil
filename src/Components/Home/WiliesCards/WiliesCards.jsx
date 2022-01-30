import "./WiliesCards.scss";
import WilyCard from "./WilyCard";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import SearchFilter from "../../../Components/UI/SearchFilter";

function WiliesCards(props) {
	
	const authCtx = useContext(AuthContext);

	return (
		<>
		<SearchFilter />
		<div className="wilies-container container">
			{
				props.wilies.map(function qstAnswerMapped(wily) {
					return (
						<WilyCard
							key={wily._id}
							wily={wily}
							isLoggedIn={authCtx.isLoggedIn}
							authenticatedUsername={authCtx.username}
							deleteWilyHandler={props.deleteWilyHandler}
						/>
					);
				})
			}
		</div>
		</>
	);
}

export default WiliesCards;