import styled from "styled-components";
import { SOUNDS } from "../../utils/constants/constants";
import DropdownSvg from "../../assets/icons/dropdown.svg?react";
import { useEffect, useRef, useState } from "react";
import { capitalize } from "../../utils/helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { changeSource, getSoundName } from "../../redux/soundSlice";
import { Flex } from "src/components/styles/Flex.styled";
import { List } from "src/components/styles/List.styled";

const SoundList = () => {
  const soundName = useSelector(getSoundName);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  const changeSoundAlert = (src: string, name: string) => {
    dispatch(changeSource({ src, name }));
    setOpen(false);
  };

  const soundItems = SOUNDS.map((sound) => {
    const buttonText = capitalize(sound.name as string);
    return (
      <Item key={sound.name}>
        <Button
          onClick={() => {
            changeSoundAlert(sound.src, sound.name);
          }}
        >
          {buttonText}
        </Button>
      </Item>
    );
  });

  const capitalizedCurrentSoundName = capitalize(soundName);

  const toggleSoundList = (e: React.MouseEvent<HTMLElement>) => {
    stopPropagation(e);
    setOpen(!open);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (open)
      document
        .getElementById("modal-wrapper")
        ?.addEventListener("click", handleOutsideClick);

    return () => {
      if (open)
        document
          .getElementById("modal-wrapper")
          ?.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <Dropdown $open={open} onClick={toggleSoundList}>
      <Flex $justify="space-between">
        {capitalizedCurrentSoundName} <DropdownSvg />
        {open && (
          <DropdownList ref={dropdownRef} onClick={stopPropagation}>
            {soundItems}
          </DropdownList>
        )}
      </Flex>
    </Dropdown>
  );
};

const Dropdown = styled.div<{ $open: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.black05};

  font-size: 0.9rem;
  font-weight: 600;
  width: 10rem;

  cursor: pointer;

  & > div {
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

const DropdownList = styled(List)`
  color: rgba(0, 0, 0, 0.5);
  left: 0;
`;

const Item = styled.li`
  &:hover {
    background-color: ${({ theme }) => theme.colors.black025};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Button = styled.button`
  height: 2.2rem;
  width: 100%;
  background-color: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 600;
  text-align: left;
  padding: 0 0.75rem;
`;

export default SoundList;
