
function ErrorContainer(props) {
	return (
		<div className="wil-content-container">
			<div className="container wil-content wily-container text-center">
				<p className="p-4 m-0">
					{props.errorMessage}
				</p>
			</div>
		</div>
	);
}

export default ErrorContainer;