import { getFilename } from "../helpers/helpers";

import Clock from "src/assets/audio/cardinal.mp3";
import Bird from "src/assets/audio/clock.mp3";
import Rooster from "src/assets/audio/rooster.mp3";

export const SOUNDS = [Clock, Bird, Rooster].map((sound) => {
  const name = getFilename(sound);

  return { src: sound, name };
});

// export const SOUNDS = Object.keys(
//   import.meta.glob("~/src/assets/audio/*", { eager: true, as: "raw" })
// ).map((sound) => {
//   console.log(sound);
//   const name = getFilename(sound);

//   return { src: sound, name };
// });

export const INITIAL_SOUND_SRC = SOUNDS[1].src;
export const THEMES: string[] = [
  "#c65151",
  "#258749",
  "#547dbf",
  "#ca8a04",
  "#86198f",
  "#a855f7",
  "#0d9488",
];