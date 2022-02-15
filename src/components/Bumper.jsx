import { staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import Logos from './Logos';
import { fade } from '../utility/animation';
import './Bumper.css';

const Bumper = ({ crossfade, audioFrame }) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const sectionImage = staticFile('/bumper.png');

	return (
		<div
			className="Bumper"
			style={{
				backgroundImage: `url(${sectionImage})`,
				opacity: fade(durationInFrames, crossfade, frame, true),
			}}
		>
			<Logos crossfade={crossfade} audioFrame={audioFrame} />
		</div>
	);
};

export default Bumper;
