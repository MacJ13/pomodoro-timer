import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    changeSource(state, action: PayloadAction<string>) {
      state.src = action.payload;
      state.playing = true;
    },
  },
});

export const { playSound, stopSound, changeSource } = soundSlice.actions;

export const selectSound = (state: RootState) => state.sound;

export const getSource = (state: RootState) => state.sound.src;

export const getPlayingStatus = (state: RootState) => state.sound.src;

export default soundSlice.reducer;
