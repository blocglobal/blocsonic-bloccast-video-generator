import { staticFile } from 'remotion';
import Intro from './Intro';
import Song from './Song';
import Heat from './Heat';
import Interview from './Interview';
import Grain from './Grain';
import Bumper from './Bumper';
import './Section.css';

const Section = ({ section, audioFrame }) => {
	let sectionImage = null;

	if (section.type === 'intro') {
		sectionImage = staticFile('/logo.png');

		return (
			<div className="Section">
				<Grain image={sectionImage} />
				<Intro {...section} audioFrame={audioFrame} />
			</div>
		);
	}

	if (section.type === 'song') {
		sectionImage = staticFile(`/${section.id}.jpg`);
		return (
			<div className="Section">
				<Grain image={sectionImage} />
				<Song {...section} audioFrame={audioFrame} />
			</div>
		);
	}

	if (section.type === 'heat') {
		sectionImage = staticFile('/logo.png');

		return (
			<div className="Section">
				<Grain image={sectionImage} />
				<Heat {...section} audioFrame={audioFrame} />
			</div>
		);
	}

	if (section.type === 'interview') {
		sectionImage = staticFile('/logo.png');

		return (
			<div className="Section">
				<Grain image={sectionImage} />
				<Interview {...section} audioFrame={audioFrame} />
			</div>
		);
	}

	if (section.type === 'bumper') {
		return <Bumper {...section} audioFrame={audioFrame} />;
	}

	return null;
};

export default Section;
