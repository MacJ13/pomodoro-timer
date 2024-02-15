import { Flex } from "src/components/styles/Flex.styled";
import styled from "styled-components";

import { Icon } from "src/components/styles/Icon.styled";

import EditSvg from "../../assets/icons/edit.svg?react";
import DeleteSvg from "../../assets/icons/delete.svg?react";
import TaskDoneSvg from "../../assets/icons/task-done.svg?react";
import TaskSquareSvg from "../../assets/icons/square.svg?react";

import { Button } from "src/components/styles/Button.styled";
import { useState } from "react";

const SingleTask = () => {
  const [done, setDone] = useState<boolean>(false);

  return (
    <StyledTask>
      <Flex $justify="space-between" $mg_bottom="0.75rem">
        <Flex $gap="0.66rem">
          <Button
            onClick={() => {
              setDone(!done);
            }}
          >
            <Icon $size="1.5rem">
              {done ? <TaskDoneSvg /> : <TaskSquareSvg />}
            </Icon>
          </Button>
          <h3>Task title</h3>
        </Flex>
        <Flex $gap="1rem">
          <span>
            0 / <strong>3</strong>
          </span>
          <Flex $gap="0.5rem">
            <Button>
              <Icon $size="1.33rem">
                <EditSvg />
              </Icon>
            </Button>
            <Button>
              <Icon $size="1.33rem">
                <DeleteSvg />
              </Icon>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <p style={{ marginLeft: "1rem" }}>
        <em>This is a default note for task</em>
      </p>
    </StyledTask>
  );
};

const StyledTask = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white025};
  border-radius: 0.33rem;
  box-shadow: 0px 2px 1px 0px rgba(255, 255, 255, 0.15);

  padding: 1rem 0.75rem;

  overflow: hidden;

  margin-bottom: 1.5rem;

  &::before {
    position: absolute;

    top: 0;
    left: 0;
    display: block;
    content: "";
    background-color: white;
    height: 0.25rem;
    width: 100%;
  }
`;

export default SingleTask;
