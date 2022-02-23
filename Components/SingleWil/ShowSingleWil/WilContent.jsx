import MarkdownPreview from "../../UI/MarkdownPreview";
import getFormatedDate from "../../../utils/FormatDate";
import Link from 'next/link'
import Image from "next/image";

function WilContent(props) {
	var { wily } = props;

	const deleteWilyHandler = (wilyId) => {
		if (confirm("Are you sure to delete the wily ??"))
			props.deleteWilyHandler(wilyId);
	};

	return (
		<div className="wil-content-container">
			<div className="container wil-content wily-container">
				<span className="date-label d-flex">
                    {wily.creator && <Image width={24} height={24} className="mr-1" src={`https://avatars.dicebear.com/api/adventurer/${wily.creator.username}.svg`} alt="" /> }
					{wily.creator && wily.creator.username} •{" "}
					{wily.creator && getFormatedDate(wily.updatedAt)}
				</span>
				<div className="qst-container">
					<MarkdownPreview value={wily.question} id={`wily_${wily._id}`} />
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
					<MarkdownPreview value={wily.answer} id={`wily_${wily._id}`} />
				</div>
				{wily.creator &&
					props.authenticatedUsername === wily.creator.username && (
						<div className="btns-container">
							<div className="control-btns">
								<Link href={`/edit/wil/${wily._id}`}>
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
