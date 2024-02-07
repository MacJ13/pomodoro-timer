import styled from "styled-components";
import { SOUNDS } from "../../constants/constants";
import DropdownSvg from "../../assets/icons/dropdown.svg?react";
import { useState } from "react";
import { capitalize } from "../../helpers/helpers";

const SoundList = () => {
  const [open, setOpen] = useState(false);

  const soundItems = SOUNDS.map((sound) => {
    const buttonText = capitalize(sound.name as string);
    return (
      <Item key={sound.name}>
        <SoundButton>{buttonText}</SoundButton>
      </Item>
    );
  });

  const toggleSoundList = () => {
    setOpen(!open);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLUListElement>) => {
    e.stopPropagation();
  };

  return (
    <Dropdown onClick={toggleSoundList}>
      Bird <DropdownSvg />
      {open && <List onClick={stopPropagation}>{soundItems}</List>}
    </Dropdown>
  );
};

const Dropdown = styled.div`
  position: relative;
  background-color: rgb(241, 241, 241);
  border-radius: 0.25rem;
  color: rgba(0, 0, 0, 0.5);
  fill: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 600;
  height: 2.2rem;
  width: 10rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

const List = styled.ul`
  background-color: white;
  position: absolute;
  list-style: none;
  top: 100%;
  left: 0;
  border-radius: 0.33rem;

  width: 100%;
  padding: 0.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  z-index: 1;
`;

const Item = styled.li`
  padding: 0 0.5rem;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    color: white;
  }
`;

const SoundButton = styled.button`
  height: 2.2rem;
  width: 100%;
  background-color: transparent;
  color: inherit;
  fill: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 600;
  text-align: left;
`;

export default SoundList;
