import { Img, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { fade, drop } from '../utility/animation';
import './Heat.css';

const Heat = ({ year, crossfade, audioFrame }) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const sectionImage = staticFile('/logo.png');

	return (
		<div
			className="Heat"
			style={{ opacity: fade(durationInFrames, crossfade, frame) }}
		>
			<div style={{ transform: `scale(${1 + audioFrame * 0.07})` }}>
				<Img src={sectionImage} />
			</div>
			<div>
				<div
					className="details"
					style={{ transform: drop(1300, crossfade, frame) }}
				>
					<div className="title">
						Heat of
						<br />
						the {year ? 'Year' : 'Month'} <span>Top 5</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Heat;
