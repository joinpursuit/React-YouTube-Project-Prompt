import React from "react";
import "./About.css";
import banana from "../cutebanana.png"

function About() {
	return (
		<div className="about-main">
			<h1>YouTube-clone</h1>
			<p>
				Hello! We made this youtube clone together!
			</p>
			<div className="about-contains">
				<div className="members-about">
					<h2>Members</h2>
                    <h5>Charlie Moran</h5>
					<div>Hello! My name is Charlie and I am a banana! 🍌</div>

					<h5>Oscar</h5>
					<div>My name is Oscar. Blah Blah Blah</div>
					
					<h5>Juan</h5><div>My name is Juan. Blah Blah Blah</div>
				</div>
				<div className="github-links">
					<h2>GitHub Links</h2>
					<a target="blank" href="https://github.com/CharlieMoran">
						Charlie's GitHub: <img className="gitlogo" src={banana} alt="logo" />
					</a>
					<br />
					<br />
                    <a target="blank" href="https://github.com/anvaron">Oscar's Github</a>
                    <br />
                    <br />
                    <a target="blank" href="https://github.com/bowersjuan">Juan's Github</a>
				</div>
			</div>
		</div>
	);
}
export default About;