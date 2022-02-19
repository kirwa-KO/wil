import "./InputPreviewMarkdown.scss";
// import Markdown from "./Markdown";
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useState } from "react";

function InputPreviewMarkdown(props) {
	const [text, setText] = useState('hello md-editor-rt！');
	const [theme] = useState('light');

	console.log(text);

	return (
		<div className={`row w-100 preview-container ${props.className}`}>
			{/* <MDEditor
				value={props.value}
				onChange={props.onChangeInput}
				textareaProps={{
					placeholder: props.placeholder,
					maxLength: props.maxChars,
				}}
				height={props.height}
			/> */}

			<Editor
				modelValue={text}
				onChange={(modelValue) => {
					setText(modelValue);
				}}
				// toolbarsExclude={['github', ]}
				// theme={theme}
				// editorClass="md-editor"
				// language="en-US"
				// style={{
				// 	height: props.height,
				// }}
			/>

		</div>
	);
}

export default InputPreviewMarkdown;
