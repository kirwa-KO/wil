import { ReactComponent as PlusIcon } from "../../../assets/PlusIcon.svg";
import { useState, useRef } from "react";
import Markdown from "../../UI/Markdown";
import "./WilyCard.scss";

var options = {
	day: "numeric",
	month: "short", //to display the full name of the month
	year: "numeric",
};

var date = new Date().toLocaleDateString("en", options);

function WilyCard(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const itemsLinkinMobileRef = useRef();

	return (
		<div className="wily">
			<div
				className="header"
				style={
					isOpen
						? {
								paddingBottom: "30px",
						  }
						: {
								// paddingBottom: "0px",
						  }
				}
				onClick={toggleOpen}
			>
				<div className="qst-container">
					<Markdown value={props.qst} />
				</div>
				<PlusIcon
					width={26}
					height={26}
					onClick={toggleOpen}
					style={
						isOpen
							? {
									transform: "rotate(180deg)",
							  }
							: {
									transfrom: "rotate(180deg)",
							  }
					}
				/>
			</div>
			<div
				style={
					isOpen
						? {
								height:
									itemsLinkinMobileRef.current.scrollHeight +
									"px",
						  }
						: {
								height: "0px",
						  }
				}
				ref={itemsLinkinMobileRef}
				className="answer"
			>
				<div className="date-and-btns">
					<span className="date-btn">{date}</span>
				</div>
				<div className="content">
					<div>
						<Markdown value={props.answer} />
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default WilyCard;
