import "./PreviewContent.scss";
import Markdown from "../../Components/UI/Markdown";
import { useState } from "react";

function PreviewContent() {

	const [previewInput, setPreviewInput] = useState();

	const onChangeInputHandler = event => {
		setPreviewInput(event.target.value);
	}

	return (
		<div className="markdown-content container">
			<div className="row">
				<textarea
					className="col-6"
					value={previewInput}
					onChange={onChangeInputHandler}
				></textarea>
				<div className="col-6 mardown-container">
					<Markdown value={previewInput} />
				</div>
			</div>
		</div>
	);
}

export default PreviewContent;
