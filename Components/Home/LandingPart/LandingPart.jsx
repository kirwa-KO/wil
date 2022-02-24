import LadingImg from "../../../assets/ladingImg.svg";

function LandingPart() {
	return (
		<div className="landing-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 right-section">
						<div className="header">
							<h1>What is Wil “What I Learned”?</h1>
							<p>Imagine if you can remember everything you learn! wil is the tool that helps you do that</p>
						</div>
						<div className="content">
							<h1>Easy Steps</h1>
							<div className="step">
								<div className="step-index">
									<span>1</span>
								</div>
								<span className="step-name">Make a wily</span>
							</div>
							<div className="desc">
								<p>when you learn something that you want to stick, make a wily a wily consists of:</p>
								<p>- Question  : a question that you ask your future self, or simply a title.</p>
								<p>- Answer    : the thing you learned</p>
								<p>- Tags         : a way to categorize your wilies</p>
								<a href="#wilies">(see examples of real wilies below)</a>
							</div>
							<div className="step">
								<div className="step-index">
									<span>2</span>
								</div>
								<span className="step-name">Wil do the rest</span>
							</div>
							<div className="desc">
								<p>wil will remind you to review it just before you <strong>forget it</strong></p>
							</div>
						</div>
						<p className="never-forget">Never forget what you learn again.</p>
					</div>
					<div className="col-md-6 mt-sm-4 mt-0 left-section">
						<LadingImg />
					</div>
				</div>
				<p className="ps">PS: wil is still in development, so for a <strong>limited period</strong>, you can sign up now for <strong>Free</strong> and try it.
					Also, we would really appreciate you sharing your feedback with us cuz that would make wil improve faster. </p>
			</div>
		</div>
	);
};

export default LandingPart;