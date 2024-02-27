export type TaskButtonProps = {
  svg: React.ReactElement;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
