import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

function MarkdownEditor(props) {
	return (
		<Editor
			modelValue={props.value}
			onChange={props.onChange}
			toolbarsExclude={['github',]}
			theme="dark"
			editorClass="md-editor"
			language="en-US"
			style={{
				height: props.height,
			}}
			editorId={props.id}
		/>
	);
};

export default MarkdownEditor;