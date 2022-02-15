import {
	useVideoConfig,
	Audio,
	Series,
	useCurrentFrame,
	AbsoluteFill,
} from 'remotion';
import { visualizeAudio, useAudioData } from '@remotion/media-utils';
import Section from './components/Section';
import audio from './assets/audio.wav';
import data from './data';
import { parseLength } from './utility/time';

export const BlocComposition = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const audioData = useAudioData(audio);

	if (!audioData) {
		return null;
	}

	const visualization = visualizeAudio({
		fps,
		frame,
		audioData,
		numberOfSamples: 1,
	});

	return (
		<>
			<AbsoluteFill style={{ backgroundColor: data.backgroundColor }}>
				<Series>
					{data.sections.map((section) => {
						const offset = section.crossfade ? -10 : undefined;

						return (
							<Series.Sequence
								key={section.id}
								name={section.sectionName}
								offset={offset}
								durationInFrames={
									parseLength(
										section.start,
										section.end,
										section.crossfade,
										fps
									).length.frames
								}
							>
								<Section section={section} audioFrame={visualization[0]} />
							</Series.Sequence>
						);
					})}
				</Series>
			</AbsoluteFill>
			<Audio src={audio} />
		</>
	);
};
