import { useDispatch, useSelector } from "react-redux";
import {
  clearRounds,
  getRound,
  selectPomodoroId,
} from "../../redux/pomodoroSlice";
import styled from "styled-components";
import { Flex } from "src/components/styles/Flex.styled";
import { useState } from "react";
import Modal from "src/components/modal/Modal";
import ModalButton from "src/components/modal/ModalButton";

const CurrentRound = () => {
  const round = useSelector(getRound);
  const stageId = useSelector(selectPomodoroId);

  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const togglePrompt = () => {
    setOpen(!open);
  };

  const handleClearRounds = () => {
    dispatch(clearRounds(stageId));
    togglePrompt();
  };

  const currentRound = round >= 1 ? Math.floor(round) : 1;

  return (
    <>
      <Round>
        <RoundButton onClick={togglePrompt}>#{currentRound}</RoundButton>
      </Round>
      {open && (
        <Modal handleClick={togglePrompt}>
          <Flex $mg_bottom="1.5rem" $gap="0.5rem">
            <p>
              Are you sure you want to <strong>clear rounds</strong>?
            </p>
            <ModalButton handleClick={handleClearRounds}>Yes</ModalButton>
            <ModalButton handleClick={togglePrompt}>No</ModalButton>
          </Flex>
          <Flex $gap="1.5rem"></Flex>
        </Modal>
      )}
    </>
  );
};

const Round = styled(Flex)`
  position: relative;
  // left: -0.15rem;

  font-family: "Chivo Mono", monospace;
  opacity: 1;
`;

const RoundButton = styled.button`
  color: inherit;
  font-size: 1rem;
  font-weight: 600;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white025};
  }
`;

export default CurrentRound;
