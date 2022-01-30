import "./WilContent.scss";
import Markdown from "../../UI/Markdown";
import getFormatedDate from "../../../utils/FormatDate";
import { Link } from "react-router-dom";

function WilContent(props) {
	var { wily } = props;

	const deleteWilyHandler = (wilyId) => {
		if (confirm("Are you sure to delete the wily ??"))
			props.deleteWilyHandler(wilyId);
	};

	return (
		<div className="wil-content-container">
			<div className="container wil-content wily-container">
				<span className="date-label">
					{wily.creator && wily.creator.username} •{" "}
					{getFormatedDate(wily.updatedAt)}
				</span>
				<div className="qst-container">
					<Markdown value={wily.question} />
				</div>
				<div className="tags-container">
					{wily.tags &&
						wily.tags.map((tag, index) => (
							<span key={index} className="tag">
								{tag.name}
							</span>
						))}
				</div>
				<hr />
				<div className="answer-container">
					<Markdown value={wily.answer} />
				</div>
				{wily.creator &&
					props.authenticatedUsername === wily.creator.username && (
						<div className="btns-container">
							<div className="control-btns">
								<Link to={`/edit/wil/${wily._id}`}>
									<button className="brdr-2-dark edit-btn">
										edit
									</button>
								</Link>
								<button
									className="brdr-2-dark delete-btn"
									onClick={deleteWilyHandler.bind(
										null,
										wily._id
									)}
								>
									delete
								</button>
							</div>
						</div>
					)}
			</div>
		</div>
	);
}

export default WilContent;
