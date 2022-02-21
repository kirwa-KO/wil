// import "./PreviewContent.scss";
import { useState } from "react";
import MarkdownEditor from "../UI/MarkdownEditor";

function PreviewContent() {

	const [previewInput, setPreviewInput] = useState();

	const onChangeInputHandler = value => {
		setPreviewInput(value);
	}

	return (
		<div className="markdown-content container">
			<div className="row">
			<MarkdownEditor 
				value={previewInput}
				onChange={onChangeInputHandler}
				id="preview-editor"
			/>
			</div>
		</div>
	);
}

export default PreviewContent;
