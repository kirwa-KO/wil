import ReactMarkdown from 'react-markdown'
// import SyntaxHighlighter from 'react-syntax-highlighter'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function Markdown({ value }) {
	return (
		<ReactMarkdown
			children={value}
			components={{
				code({ node, inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || "");
					return !inline && match ? (
						<SyntaxHighlighter
							children={String(children).replace(/\n$/, "")}
							style={a11yDark}
							language={match[1]}
							PreTag="div"
							{...props}
						/>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					);
				},
			}}
		/>
	);
}


export default Markdown;