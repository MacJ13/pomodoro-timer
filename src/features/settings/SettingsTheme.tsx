import { useDispatch, useSelector } from "react-redux";
import { selectAllStages } from "../../redux/stagesSlice";
import SettingsRow from "./SettingsRow";
import styled from "styled-components";
import { openTheme } from "../../redux/settingsSlice";
import { Button } from "src/components/styles/Button.styled";
import { Flex } from "src/components/styles/Flex.styled";

const SettingsTheme = () => {
  const stages = useSelector(selectAllStages);

  const dispatch = useDispatch();

  const openChangeSettings = (id: string, color: string) => {
    dispatch(openTheme({ id, color }));
  };

  const renderedButtons = stages.map((stage) => {
    return (
      <ThemeButton
        key={stage.id}
        onClick={() => {
          openChangeSettings(stage.id, stage.color);
        }}
        $current={stage.color}
      >
        {stage.name}
      </ThemeButton>
    );
  });

  return (
    <SettingsRow title="Themes">
      <Flex $gap="0.75rem">{renderedButtons}</Flex>
    </SettingsRow>
  );
};

const ThemeButton = styled(Button)<{ $current: string }>`
  background-color: ${(props) => `${props.$current}`};

  font-size: 0.66rem;
  font-weight: 500;

  padding: 0.66rem 0.5rem;
  // margin-left: 1rem;
  color: ${({ theme }) => theme.colors.white};
  width: 5rem;

  &:hover {
    background-color: ${(props) => `${props.$current}`};
  }
`;

export default SettingsTheme;
