import { ReactComponent as PlusIcon } from "../../../assets/PlusIcon.svg";
import { useState, useRef } from "react";

function WildCard(props) {
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
								paddingBottom: "0px",
						  }
				}
				onClick={toggleOpen}
			>
				<h4>{props.qst}</h4>
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
			>
				{props.answer}
			</p>
		</div>
	);
}

export default WildCard;
