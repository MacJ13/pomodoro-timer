export type Status = "changing" | "pause" | "start";

export type Stage = {
  id: string;
  name: string;
  duration: number;
  color: string;
};

export type ChildrenProps = {
  children: React.ReactElement | React.ReactElement[];
};
