export interface PomodoroState {
  [key: string]: string | number | boolean;
  status: "start" | "pause" | "idle";
  stageId: string;
  longBreakInterval: number;
  round: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
}

export interface SoundState {
  playing: boolean;
  volume: number;
  src: string;
  name: string;
  repeat: number;
}

export interface UpdatedTask {
  id: string;
  title: string;
  notes: string;
  roundsTotal: number;
  roundsComplete: number;
}

export interface Stage {
  id: string;
  name: string;
  duration: number;
  color: string;
}
