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
import Modal from "src/components/modal/Modal";

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
      <Modal handleClick={closeSettings}>{content}</Modal>
    </>
  );
};

const CloseButton = styled.button`
  position: relative;
  height: 1.25rem;
  width: 1.25rem;
  background: none;

  opacity: 0.25;

  transition: opacity 0.375s;

  &:hover {
    opacity: 0.375;
  }
`;

export default Settings;
