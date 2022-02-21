import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

function MarkdownPreview({ id, value }) {
	return (
		<Editor
			modelValue={value}
			editorClass="md-editor-previw"
			previewOnly={true}
			language="en-US"
		/>
	);
}


export default MarkdownPreview;