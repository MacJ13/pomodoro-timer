import Bird from "src/assets/audio/cardinal.mp3";
import Clock from "src/assets/audio/clock.mp3";
import Rooster from "src/assets/audio/rooster.mp3";

export const SOUNDS = [
  { src: Clock, name: "clock" },
  { src: Bird, name: "cardinal" },
  { src: Rooster, name: "rooster" },
];

export const INITIAL_SOUND_SRC = SOUNDS[0];

export const THEMES: string[] = [
  "#c65151",
  "#258749",
  "#547dbf",
  "#ca8a04",
  "#86198f",
  "#a855f7",
  "#0d9488",
];
