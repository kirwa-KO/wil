import { ReactComponent as PlusIcon } from "../../../assets/PlusIcon.svg";
import { useState, useRef } from "react";
import Markdown from "../../UI/Markdown";
import { Link } from "react-router-dom";
import "./WilyCard.scss";
import getFormatedDate from "../../../utils/FormatDate";

function WilyCard(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	var { wily } = props;

	const itemsLinkinMobileRef = useRef();

	return (
		<div className="wily wily-container">
			<span className="date-label">
				{wily.creator.username} • {getFormatedDate(wily.updatedAt)}
			</span>
			<div className="header" onClick={toggleOpen}>
				<div className="qst-container">
					<Markdown value={wily.question} />
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
				className="tags-container"
				style={
					isOpen
						? {
								paddingBottom: "16px",
						  }
						: {
								// paddingBottom: "0px",
						  }
				}
			>
				{wily.tags.map((tag, index) => (
					<span key={index} className="tag">
						{tag}
					</span>
				))}
			</div>
			{isOpen && <hr />}
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
				<div className="content">
					<div>
						<Markdown value={wily.answer} />
					</div>
					<div></div>
				</div>
				{
					props.isLoggedIn &&
					wily.creator.username === props.authenticatedUsername && (
						<div className="btns-container">
							<div className="control-btns">
								<Link to={`/wil/${wily._id}`}>
									<button className="brdr-2-dark">
										open as page
									</button>
								</Link>
								<Link to={`/edit/wil/${wily._id}`}>
									<button className="brdr-2-dark edit-btn">
										edit
									</button>
								</Link>
								<button className="brdr-2-dark delete-btn">
									delete
								</button>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
}

export default WilyCard;
