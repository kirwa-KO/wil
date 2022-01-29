import "./WilContent.scss";
import Markdown from "../../UI/Markdown";
import getFormatedDate from "../../../utils/FormatDate";
import { Link } from "react-router-dom";

function WilContent(props) {
	var { wily } = props;

	return (
		<div className="wil-content-container">
			<div className="container wil-content wily-container">
				<span className="date-label">
					twelve • {getFormatedDate(wily.date)}
				</span>
				<div className="qst-container">
					<Markdown value={wily.qst} />
				</div>
				<div className="tags-container">
					{wily.tags.map((tag, index) => (
						<span key={index} className="tag">
							{tag}
						</span>
					))}
				</div>
				<hr />
				<div className="answer-container">
					<Markdown value={wily.answer} />
				</div>
				<div className="btns-container">
					<div className="control-btns">
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
			</div>
		</div>
	);
}

export default WilContent;
