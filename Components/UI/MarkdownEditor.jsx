import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import Editor from 'md-editor-rt';
import hljs from 'highlight.js';

function MarkdownEditor(props) {
	const authCtx = useContext(AuthContext);
	return (
		<Editor
			modelValue={props.value}
			onChange={props.onChange}
			toolbarsExclude={['github',]}
			theme={authCtx.lightMode ? 'dark' : 'light'}
			editorClass={`md-editor ${props.className ? props.className : ''}`}
			language="en-US"
			style={{
				height: props.height,
			}}
			editorId={props.id}
            hljs= {hljs}
		/>
	);
};

export default MarkdownEditor;