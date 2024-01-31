export type Status = "changing" | "pause" | "start";

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
