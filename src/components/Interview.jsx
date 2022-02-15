import { Img, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { fade, drop } from '../utility/animation';
import './Interview.css';

const Interview = ({ id, interviewee, crossfade, audioFrame }) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const sectionImage = staticFile(`/${id}.png`);
	const sectionBG = staticFile('/song-bg.png');

	return (
		<div
			className="Interview"
			style={{
				backgroundImage: `url(${sectionBG})`,
				opacity: fade(durationInFrames, crossfade, frame),
			}}
		>
			<div style={{ transform: `scale(${1 + audioFrame * 0.07})` }}>
				<Img
					src={sectionImage}
					style={{ boxShadow: '0 0 80px rgba(0,0,0,.8)' }}
				/>
			</div>
			<div>
				<div
					className="details"
					style={{ transform: drop(1300, crossfade, frame) }}
				>
					<div className="title">
						Interview with
						<br />
						<span>{interviewee}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Interview;
