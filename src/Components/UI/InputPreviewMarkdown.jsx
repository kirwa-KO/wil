import "./InputPreviewMarkdown.scss";
// import Markdown from "./Markdown";
// import MarkdownEditor from '@uiw/react-markdown-editor';
import MDEditor from '@uiw/react-md-editor';

function InputPreviewMarkdown(props) {
	return (
		<div className={`row w-100 preview-container ${props.className}`}>
			<MDEditor
				value={props.value}
				onChange={props.onChangeInput}
				textareaProps={{
					placeholder: props.placeholder,
					maxLength: props.maxChars,
				}}
				height={props.height}
			/>
		</div>
	);
}

export default InputPreviewMarkdown;
