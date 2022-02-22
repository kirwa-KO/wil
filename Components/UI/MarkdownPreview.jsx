import Editor from 'md-editor-rt';

function MarkdownPreview({ id, value }) {
	return (
		<Editor
			modelValue={value}
			editorClass="md-editor-previw"
			previewOnly={true}
			language="en-US"
            editorId={id}
		/>
	);
}


export default MarkdownPreview;