# blocGLOBAL Podcast Video Remotion Template

A template/preset that utilizes [Remotion](https://www.remotion.dev) to generate a 4k video using configuration data.

## Available commands

The following commands are available:

**Start Preview**

```console
npm run start
```

**Render video**

```console
npm run build
```

**Customize quality of video with environment variable (default value is `50`)**

```console
QUALITY=70 npm run build
```

**Render range of video frames with default of 0-100**

```console
npm run build:frames
```

**Customize range of video frames render with environment variable**

```console
FRAMES=100-200 npm run build:frames
```

**Customize quality of video with environment variable (default value is same as `build` command)**

```console
QUALITY=70 npm run build:frames
```

**Render still image (default frame: 0)**

```console
npm run still
```

**Render still image using custom frame**

```console
FRAME=100 npm run still
```

**Upgrade Remotion to the latest version
```console
npm run upgrade
```

## Instructions

1. Replace the dummy audio file found in `src/assets/audio.wav` with your own.
2. Supply your own data at `src/data/index.js`.
3. Supply your own section images in `public`. (`song` and `interview` section images should be named the same as the section’s `id` attribute)
4. Preview or render using any of the above commands

## Required data:

Your data javascript file should return an object containing the following attributes:

- `length`: Length of video in seconds
- `backgroundColor`: Video’s hexadecimal background color
- `sections`: Array of section objects

### Section structure

At the minimum, the following attributes are required in each section.

- `id`: A unique integer value. This value is used for `song` sections.
- `start`: The starting time signature for the section (eg. `1:20`)
- `end`: The ending time signature for the section
- `type`: One of the following string values:
  - intro
  - song
  - heat
  - interview
  - bumper
- `sectionName`: The name of the section used in the preview UI to identify the section in the sidebar

The following attribute is optional.

- `crossfade`: A boolean value that indicates whether or not the section should crossfade with the previous section. If not included, it will not crossfade. Accepted values are the boolean values `true` or `false`.

#### Section type specific attributes

The following additional attributes are specific to particular section types.

##### intro

- `episode`: A string representing your episode (eg. `Episode 1`) _(required)_
- `name`: The name of the episode _(required)_
- `month`: A string representing the month (eg. `January, 202`) _(required)_
- `host`: The name of the host _(required)_

##### song

- `artist`: The name of the artist _(required)_
- `title`: The title of the song _(required)_
- `features`: Additional information about the song (eg. `(Features Someone)`) _(optional)_
- `release`: An object containing information about the song’s release. The following attributes are required: _(required)_
  - `title`: The title of the release
  - `catNo`: The release catalog number
  - `date`: The release date (eg. `December 31st, 2021`)
  - `type`: The release type (eg. `Original`, `maxBloc`)
- `heat`: An object containing information about the song’s release ranking _(optional)_
  - `year`: A boolean representing whether or not the ranking is for the Heat of the Year
  - `rank`: A number representing the rank

##### heat

- `year`: A boolean indicating whether or not the heat section is for the year _(required)_

##### interview

- `interviewee`: The person who is interviewed. _(required)_

##### bumper

The `bumper` section type does not have any special attributes.
