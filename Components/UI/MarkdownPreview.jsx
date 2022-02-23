import Editor from 'md-editor-rt';
import hljs from 'highlight.js';

function MarkdownPreview({ id, value }) {
	return (
		<Editor
			modelValue={value}
			editorClass="md-editor-previw"
			previewOnly={true}
			language="en-US"
            editorId={id}
            hljs={hljs}
		/>
	);
}


export default MarkdownPreview;