import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { INITIAL_SOUND_SRC } from "../constants/constants";
interface SoundState {
  playing: boolean;
  volume: number;
  src: string;
  repeat: number;
}

const initialState: SoundState = {
  playing: false,
  volume: 50,
  src: INITIAL_SOUND_SRC,
  repeat: 2,
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
  },
});

export const { playSound, stopSound } = soundSlice.actions;

export const selectSound = (state: RootState) => state.sound;

export const getSource = (state: RootState) => state.sound.src;

export const getPlayingStatus = (state: RootState) => state.sound.src;

export default soundSlice.reducer;
