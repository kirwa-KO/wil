import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

function MarkdownPreview({ value }) {
	return (
		<Editor
			modelValue={value}
			editorClass="md-editor-previw"
			// theme={theme}
			previewOnly={true}
			language="en-US"
		/>
	);
}


export default MarkdownPreview;