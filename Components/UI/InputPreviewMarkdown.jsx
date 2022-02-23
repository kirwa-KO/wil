import MarkdownEditor from "../UI/MarkdownEditor"

function InputPreviewMarkdown(props) {
	return (
		<div className={`row w-100 preview-container ${props.className}`}>
			<MarkdownEditor 
				value={props.value}
				onChange={props.onChangeInput}
				height={props.height}
				id={props.id}
			/>
		</div>
	);
}

export default InputPreviewMarkdown;
