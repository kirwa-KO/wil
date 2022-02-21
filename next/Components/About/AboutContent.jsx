// import "./AboutContent.scss";
import TeamCard from "./TeamCard";
import Link from 'next/link'

function AboutContent() {
	return (
		<div className="content-container">
			<div className="container content bg-dark-darkmode">
				<h4>How to use Wil :</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, tenetur alias ullam veniam, soluta voluptate libero quibusdam eveniet quam nostrum laborum optio animi eligendi obcaecati exercitationem non explicabo omnis tempore?
				</p>
				<h4>Markdown ref :</h4>
				<p>
					to learn how to use shortcuts in question and answer inputs:{" "}
					<br />
					<a
						href="https://www.markdownguide.org/cheat-sheet/"
						target="_blank"
					>
						https://www.markdownguide.org/cheat-sheet/
					</a>
				</p>
				<h4>How Wil help you :</h4>
				<p>
					will help you to create a question and answer in a simple
					way, and apllicate space repetition. <br />
					<a
						href="https://quantifiedself.com/blog/spaced-repetition-and-learning/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Spaced Repetition and Learning
					</a>
					<br />
					<a
						href="https://www.supermemo.com/en/archives1990-2015/english/princip"
						target="_blank"
						rel="noopener noreferrer"
					>
						The problem of forgetting
					</a>
					<br />
					<a
						href="https://www.jackkinsella.ie/articles/janki-method-refined"
						target="_blank"
						rel="noopener noreferrer"
					>
						JANKI METHOD REFINED
					</a>
				</p>
			</div>
			<div className="container content bg-dark-darkmode">
				<h4>Wil Pricing :</h4>
				<p>wil is still in the development period, so we are not charging, for now, we would really like to hear your feedback (positive or negative), or if you have any ideas on how to improve the app</p>
				<form action="https://form.taxi/s/11120p5w" method="POST" className="bg-dark-darkmode border-none">
					<div className="row">
						<label htmlFor="email" className="w-100">Email :</label>
						<input type="email" name="email" className="w-100" placeholder="youremail@gmail.com" />
					</div>
					<div className="row">
						<label htmlFor="feedback" className="w-100">Feedback :</label>
						<textarea name="feedback" className="w-100" id="" rows="5" placeholder="your feedback..."></textarea>
					</div>
					<button className="main-btn">Submit</button>
				</form>
			</div>
			<div className="container content bg-dark-darkmode mb-4">
				<h4>Our Team :</h4>
				<div className="row">
					<TeamCard
						img="/imgs/teams/twelve.png"
						name="Abdelali Ait Hmid"
						role="Backend Developer"
						github={null}
						twitter="https://twitter.com/AbdelaliAithmid"
						instagram={null}
						/>
					<TeamCard
						img="/imgs/teams/kirwa-ko.png"
						name="Imran Baali"
						role="Frontend Developer"
						github="https://github.com/kirwa-KO"
						twitter="https://twitter.com/kirwaKO"
						instagram="https://www.instagram.com/baali_imran/"
						/>
				</div>
				<Link href="/hire-us">
					<button className="main-btn w-100 mt-4">
						Hire us
					</button>

				</Link>
			</div>
		</div>
	);
}

export default AboutContent;
