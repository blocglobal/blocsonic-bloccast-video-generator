import { Img, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { drop, fade } from '../utility/animation';
import './Intro.css';

const Intro = ({ episode, name, month, host, crossfade, audioFrame }) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const sectionImage = staticFile('/logo.png');

	return (
		<div
			className="Intro"
			style={{ opacity: fade(durationInFrames, crossfade, frame) }}
		>
			<div style={{ transform: `scale(${1 + audioFrame * 0.07})` }}>
				<Img src={sectionImage} />
			</div>
			<div>
				<div
					className="details"
					style={{
						transform: crossfade ? drop(1300, crossfade, frame) : 'none',
					}}
				>
					<div className="episode">{episode}</div>
					<div className="name">{name}</div>
					<div className="host">Hosted by {host}</div>
					<div className="month">{month}</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
