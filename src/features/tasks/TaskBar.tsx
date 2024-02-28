import { Flex } from "src/components/styles/Flex.styled";
import DotsSvg from "../../assets/icons/dots.svg?react";
import AddSvg from "../../assets/icons/add.svg?react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleCreatingTask } from "src/redux/settingsSlice";
import { useEffect, useRef, useState } from "react";
import TaskDropdown from "./TaskDropdown";
import TasksCounter from "./TasksCounter";
import TaskButton from "./TaskButton";

const TaskBar = () => {
  const dispatch = useDispatch();

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      closeDropdownList();
    }
  };

  const closeDropdownList = () => {
    setOpenDropdown(false);
  };

  const openModal = () => {
    dispatch(toggleCreatingTask());
  };

  useEffect(() => {
    if (openDropdown) document.addEventListener("click", handleOutsideClick);

    return () => {
      if (openDropdown)
        document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <Bar>
      <Flex $justify="space-between">
        <TaskButton svg={<AddSvg />} handleClick={openModal} />
        <TasksCounter />
        <TaskButton
          svg={<DotsSvg />}
          handleClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            setOpenDropdown(!openDropdown);
            e.stopPropagation();
          }}
        />
      </Flex>
      {openDropdown && (
        <TaskDropdown ref={dropdownRef} handleClick={closeDropdownList} />
      )}
    </Bar>
  );
};

const Bar = styled.div`
  border-radius: 0.33rem;
  background-color: ${({ theme }) => theme.colors.white025};
  box-shadow: 0px 2px 1px 0px rgba(255, 255, 255, 0.15);
  position: relative;
  padding: 1rem;

  width: 100%;
  margin-bottom: 1.5rem;

  & h2 {
    letter-spacing: 1px;
  }
`;

export default TaskBar;
