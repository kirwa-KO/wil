import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

function MarkdownEditor(props) {
	const authCtx = useContext(AuthContext);
	return (
		<Editor
			modelValue={props.value}
			onChange={props.onChange}
			toolbarsExclude={['github',]}
			theme={authCtx.lightMode ? 'dark' : 'light'}
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