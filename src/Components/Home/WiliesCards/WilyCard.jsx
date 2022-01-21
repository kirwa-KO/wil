import { ReactComponent as PlusIcon } from "../../../assets/PlusIcon.svg";
import { useState, useRef } from "react";
import Markdown from "../../UI/Markdown";
import "./WilyCard.scss";

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
			<p
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
				{props.answer}
			</p>
		</div>
	);
}

export default WilyCard;
