// import "./InputPreviewMarkdown.scss";
import MarkdownEditor from "../UI/MarkdownEditor"

function InputPreviewMarkdown(props) {

	return (
		<div className={`row w-100 preview-container ${props.className}`}>
			{/* <Editor
				modelValue={props.value}
				onChange={props.onChangeInput}
				toolbarsExclude={['github', ]}
				theme={theme}
				editorClass="md-editor"
				language="en-US"
				style={{
					height: props.height,
				}}
				editorId={props.id}
			/> */}

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
