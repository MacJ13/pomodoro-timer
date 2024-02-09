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
  volume: 0.5,
  src: INITIAL_SOUND_SRC,
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
    changeSource(state, action: PayloadAction<string>) {
      state.src = action.payload;
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

export const getSource = (state: RootState) => state.sound.src;

export const getVolume = (state: RootState) => state.sound.volume;

export const getRepeat = (state: RootState) => state.sound.repeat;

export const getPlayingStatus = (state: RootState) => state.sound.src;

export default soundSlice.reducer;
