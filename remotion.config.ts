import { Config } from 'remotion';

Config.Bundling.overrideWebpackConfig((currentConfiguration) => {
	return {
		...currentConfiguration,
		module: {
			...currentConfiguration.module,
			rules: [
				...(currentConfiguration.module?.rules
					? currentConfiguration.module.rules
					: []
				).filter((rule) => {
					if (rule === '...') {
						return false;
					}
					if (rule.test?.toString().includes('.css')) {
						return false;
					}
					return true;
				}),
				{
					test: /\.css$/i,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: ['postcss-preset-env', 'autoprefixer'],
								},
							},
						},
					],
				},
			],
		},
	};
});

Config.Preview.setMaxTimelineTracks(30);
Config.Rendering.setConcurrency(2);
Config.Output.setOverwriteOutput(true);
Config.Output.setCodec('h265');

Config.Puppeteer.setTimeoutInMilliseconds(150000);
