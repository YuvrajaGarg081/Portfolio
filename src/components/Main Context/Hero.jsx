import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certification from "./Certificate";

const Hero = ({ name }) => {
	return (
		<main>
			<Intro name={name} />
			<About />
			<Skills />
			<Projects />
			<Education />
			<Certification />
		</main>
	);
};

export default Hero;
