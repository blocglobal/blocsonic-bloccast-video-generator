import { Composition } from 'remotion';
import { BlocComposition } from './Composition';
import { secondsToFrames } from './utility/time';
import data from './data';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="bloccast"
				component={BlocComposition}
				durationInFrames={secondsToFrames(data.length, 30)}
				fps={30}
				width={3840}
				height={2160}
			/>
		</>
	);
};
