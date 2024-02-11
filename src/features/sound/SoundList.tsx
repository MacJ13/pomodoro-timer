import styled from "styled-components";
import { SOUNDS } from "../../constants/constants";
import DropdownSvg from "../../assets/icons/dropdown.svg?react";
import { useState } from "react";
import { capitalize, getFilename } from "../../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { changeSource, getSource } from "../../redux/soundSlice";
import { Flex } from "src/components/styles/Flex.styled";

const SoundList = () => {
  const source = useSelector(getSource);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const changeSoundAlert = (name: string) => {
    dispatch(changeSource(name));
    setOpen(false);
  };

  const soundItems = SOUNDS.map((sound) => {
    const buttonText = capitalize(sound.name as string);
    return (
      <Item key={sound.name}>
        <Button
          onClick={() => {
            changeSoundAlert(sound.src);
          }}
        >
          {buttonText}
        </Button>
      </Item>
    );
  });

  const currentSoundName = capitalize(getFilename(source));

  const toggleSoundList = () => {
    setOpen(!open);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLUListElement>) => {
    e.stopPropagation();
  };

  return (
    <Dropdown $open={open} onClick={toggleSoundList}>
      <Flex $justify="space-between">
        {currentSoundName} <DropdownSvg />
        {open && <List onClick={stopPropagation}>{soundItems}</List>}
      </Flex>
    </Dropdown>
  );
};

const Dropdown = styled.div<{ $open: boolean }>`
  position: relative;
  background-color: rgb(241, 241, 241);
  border-radius: 0.25rem;
  color: rgba(0, 0, 0, 0.5);

  font-size: 0.9rem;
  font-weight: 600;
  width: 10rem;

  cursor: pointer;

  & > div {
    padding: 0.5rem 1rem;
    width: 100%;
  }

  ${(props) =>
    props.$open
      ? `
    z-index: 0;
    &:before {
  
      content: "";
      position: fixed;
      // background-color: grey;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      cursor: auto;
      z-index: -1;
    }
    `
      : ""}
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
  z-index: 0;
`;

const Item = styled.li`
  padding: 0 0.5rem;

  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    color: white;
  }
`;

const Button = styled.button`
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
