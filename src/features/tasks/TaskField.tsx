import { Flex } from "src/components/styles/Flex.styled";
import { Label } from "src/components/styles/Label.styled";
import { RowProps } from "src/types/types";
import styled from "styled-components";

const TaskField = ({ title, children }: RowProps) => {
  return (
    <Flex
      $justify="flex-start"
      $align="flex-start"
      $gap="0.75rem"
      $mg_bottom="1rem"
    >
      <Label $width="4.5rem">{title}</Label>
      <Row>{children}</Row>
    </Flex>
  );
};

const Row = styled.div`
  width: 100%;
`;

export default TaskField;
