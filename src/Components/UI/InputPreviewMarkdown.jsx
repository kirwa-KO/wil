import "./InputPreviewMarkdown.scss";
import Markdown from "./Markdown";

function InputPreviewMarkdown(props) {
	return (
		<div className={`row w-100 preview-container ${props.className}`}>
			<textarea
				onChange={props.onChangeInput}
				rows={props.rows}
				placeholder={props.placeholder}
				maxLength={props.maxChars}
				className="col-6"
				value={props.value}
			/>
			<div className="col-6 markdown-container">
				<Markdown value={props.value} />
			</div>
		</div>
	);
}

export default InputPreviewMarkdown;
