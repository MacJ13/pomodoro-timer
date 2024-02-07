import { getFilename } from "../helpers/helpers";

export const SOUNDS = Object.keys(import.meta.glob("../assets/audio/*")).map(
  (sound) => {
    const name = getFilename(sound);

    return { src: sound, name };
  }
);

export const THEMES: string[] = [
  "#c65151",
  "#258749",
  "#547dbf",
  "#ca8a04",
  "#86198f",
  "#a855f7",
  "#0d9488",
];
