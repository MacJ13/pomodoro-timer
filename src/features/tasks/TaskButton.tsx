import { ChildrenProps } from "src/types/types";
import styled from "styled-components";

const TaskButton = ({ children }: ChildrenProps) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white025};
  border-radius: 50%;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.125);
  padding: 0.125rem;

  &:active {
    transform: translate(1px, 1px);
  }
`;

export default TaskButton;
