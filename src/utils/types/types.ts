export type HandlerProps = {
  handleClick: () => void;
};

export type CountdownProps = {
  duration: number;
};

export type SingleTaskProps = {
  index: number;
  taskId: string;
};

export type ChildrenProps = {
  children?: React.ReactElement | React.ReactElement[];
};

export type TaskButtonProps = {
  svg: React.ReactElement;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type InputProps = {
  count: number;
  handleChange: (value: number) => void;
};

export type ToggleButtonProps = {
  active: boolean;
  onClick: (active: boolean) => void;
};

export type ControlButtonProps = {
  disabled?: boolean;
  svg: React.ReactElement;
} & HandlerProps;

export type RowProps = { title: string } & ChildrenProps;

export type ModalButtonProps = { children: React.ReactNode } & HandlerProps;

export type ModalProps = HandlerProps & ChildrenProps;

export type SingleTaskDraggableProps = SingleTaskProps & ChildrenProps;
