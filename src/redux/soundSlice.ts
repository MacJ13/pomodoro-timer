import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { INITIAL_SOUND_SRC } from "../utils/constants/constants";
import { Sound } from "src/utils/types/types";
import { SoundState } from "src/utils/interfaces/interfaces";

const initialState: SoundState = {
  playing: false,
  volume: 0.5,
  src: INITIAL_SOUND_SRC.src,
  name: INITIAL_SOUND_SRC.name,
  repeat: 1,
};

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    playSound(state) {
      state.playing = true;
    },
    stopSound(state) {
      state.playing = false;
    },
    changeSource(state, action: PayloadAction<Sound>) {
      const { src, name } = action.payload;
      state.src = src;
      state.name = name;
      state.playing = true;
    },
    changeVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
      if (!state.playing) state.playing = true;
    },
    updateRepeat(state, action: PayloadAction<number>) {
      state.repeat = action.payload;
    },
  },
});

export const {
  playSound,
  stopSound,
  changeSource,
  changeVolume,
  updateRepeat,
} = soundSlice.actions;

export const selectSound = (state: RootState) => state.sound;

export const getSoundName = (state: RootState) => state.sound.name;

export const getVolume = (state: RootState) => state.sound.volume;

export const getRepeat = (state: RootState) => state.sound.repeat;

export const getPlayingStatus = (state: RootState) => state.sound.src;

export default soundSlice.reducer;
