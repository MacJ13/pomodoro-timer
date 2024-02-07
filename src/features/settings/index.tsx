import styled from "styled-components";
import CloseSvg from "../../assets/icons/close.svg?react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOpen,
  selectTheme,
  toggleSettings,
  toggleTheme,
} from "../../redux/settingsSlice";
import ChangeDuration from "./ChangeDuration";
import ChangeAutoStart from "./ChangeAutoStart";
import ChangeInterval from "./ChangeInterval";
import SettingsTheme from "./SettingsTheme";
import ChangeThemes from "./ChangeThemes";
import SettingsHeading from "./SettingsHeading";
import SettingsSound from "./SettingsSound";

const Settings = () => {
  const openSettings = useSelector(selectOpen);
  const openTheme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const closeSettings = () => {
    if (openTheme) {
      dispatch(toggleTheme());
    } else if (openSettings) {
      dispatch(toggleSettings());
    }
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!openSettings && !openTheme) return null;

  const content = openTheme ? (
    <>
      <SettingsHeading title="Themes" />
      <ChangeThemes />
    </>
  ) : (
    <>
      <SettingsHeading title="Settings">
        <CloseButton onClick={closeSettings}>
          <CloseSvg />
        </CloseButton>
      </SettingsHeading>
      <ChangeDuration />
      <ChangeAutoStart />
      <ChangeInterval />
      <SettingsSound />
      <SettingsTheme />
    </>
  );

  return (
    <>
      <Modal onClick={closeSettings}>
        <Content onClick={stopPropagation}>{content}</Content>
      </Modal>
    </>
  );
};

const CloseButton = styled.button`
  position: relative;
  height: 1.25rem;
  width: 1.25rem;
  fill: rgba(0, 0, 0, 1);
  background: none;

  opacity: 0.25;

  transition: opacity 0.375s;

  &:hover {
    opacity: 0.375;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  z-index: 5;
`;

const Content = styled.div`
  position: relative;
  background-color: white;
  border-radius: 0.75rem;
  color: grey;
  width: 100%;
  max-width: 30rem;
  margin: 2rem auto;
  padding: 1rem 1.5rem;
`;

export default Settings;
