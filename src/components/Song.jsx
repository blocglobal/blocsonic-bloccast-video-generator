import { Img, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { fade, drop } from '../utility/animation';
import './Song.css';

const Song = ({
	id,
	artist,
	title,
	features,
	release,
	heat,
	crossfade,
	audioFrame,
}) => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const sectionImage = staticFile(`/${id}.jpg`);
	const sectionBG = staticFile('/song-bg.png');

	return (
		<div
			className="Song"
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
					style={{ transform: drop(1600, crossfade, frame) }}
				>
					<div className="artist">{artist}</div>
					<div className="title">{title}</div>
					{features && <div className="features">{features}</div>}
					<div className="release">
						From the <span>blocSonic {release.type}</span> release{' '}
						<span>“{release.title}”</span>
					</div>
					<div className="date">
						<span>Released:</span> {release.date}
					</div>
					<div className="cat">
						<span>Catalog Number:</span> {release.catNo}
					</div>
					{heat && (
						<>
							<div className="heat">
								Tha Bloc Report Heat
								<br />
								Of The {heat.year ? 'Year' : 'Month'}
							</div>
							<div className="rank">#{heat.rank}</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Song;
