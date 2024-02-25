export type Status = "start" | "pause" | "idle";

export type StageId = string | number;

export type Stage = {
  id: StageId;
  name: string;
  duration: number;
  color: string;
};

export type Task = {
  id: string;
  title: string;
  notes?: string;
  roundsTotal: number;
  roundsComplete: number;
  done: boolean;
  active: boolean;
  createdAt: string;
};

export type Sound = {
  src: string;
  name: string;
};

export type SingleTaskProps = {
  index: number;
  taskId: string;
};

export type ChildrenProps = {
  children?: React.ReactElement | React.ReactElement[];
};

export type RowProps = { title: string } & ChildrenProps;

export type ToggleButtonProps = {
  active: boolean;
  onClick: (active: boolean) => void;
};
