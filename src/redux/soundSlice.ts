import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface SoundState {
  playing: boolean;
  volume: number;
  src: string;
  repeat: number;
}

const initialState: SoundState = {
  playing: false,
  volume: 0,
  src: "",
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
  },
});

export const { playSound, stopSound } = soundSlice.actions;

export const selectSound = (state: RootState) => state.sound;
export default soundSlice.reducer;
