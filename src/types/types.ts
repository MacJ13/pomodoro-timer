export type Status = "start" | "pause" | "idle";

export type StageId = string | number;

export type Stage = {
  id: StageId;
  name: string;
  duration: number;
  color: string;
};

export type ChildrenProps = {
  children: React.ReactElement | React.ReactElement[];
};

export type RowProps = { title: string } & ChildrenProps;

export type ToggleButtonProps = {
  active: boolean;
  onClick: (active: boolean) => void;
};
