import { useState, useRef } from "react";
import Image from "next/image";
import MarkdownPreview from "../../UI/MarkdownPreview";
import Link from 'next/link'
import getFormatedDate from "../../../utils/FormatDate";
import PlusIcon from "../../../assets/PlusIcon.svg"

function WilyCard(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	var { wily } = props;

	const itemsLinkinMobileRef = useRef();

	const deleteWily = wilyId => {
		if (confirm("Are you sure to delete the wily ??"))
			props.deleteWilyHandler(wilyId);
	}

	return (
		<div className="wily wily-container">
			<span className="date-label d-flex">
			    <Image width={24} height={24} className="mr-1" src={`https://avatars.dicebear.com/api/adventurer/${wily.creator.username}.svg`} alt="" />
				{wily.creator.username} • {getFormatedDate(wily.updatedAt)}
			</span>
			<div className="header" onClick={toggleOpen}>
				<div className="qst-container">
					<MarkdownPreview value={wily.question} id={`wily_${wily._id}`} />
				</div>
				<PlusIcon
					width={26}
					height={26}
                    src="/imgs/PlusIcon.svg"
                    alt="plus icon"
					onClick={toggleOpen}
                    className={`animate ${isOpen ? "rotate-180" : ""}`}
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
						{ tag.name }
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
				className="answer animate"
			>
				<div className="content">
					<div className="answer-container">
						<MarkdownPreview value={wily.answer} id={`wily_${wily._id}`} />
					</div>
					<div></div>
				</div>
				{
					props.isLoggedIn &&
					wily.creator.username === props.authenticatedUsername && (
						<div className="btns-container">
							<div className="control-btns">
								<Link href={`/wil/${wily._id}`}>
									<button className="brdr-2-dark">
										open as page
									</button>
								</Link>
								<Link href={`/edit/wil/${wily._id}`}>
									<button className="brdr-2-dark edit-btn">
										edit
									</button>
								</Link>
								<button className="brdr-2-dark delete-btn" onClick={deleteWily.bind(null, wily._id)}>
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
