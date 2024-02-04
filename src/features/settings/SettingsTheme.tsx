import { useSelector } from "react-redux";
import { selectAllStages } from "../../redux/stagesSlice";
import SettingsRow from "./SettingsRow";
import styled from "styled-components";

const SettingsTheme = () => {
  const stages = useSelector(selectAllStages);

  const renderedButtons = stages.map((stage) => {
    return <ThemeButton key={stage.id} $current={stage.color} />;
  });

  return (
    <SettingsRow title="Themes">
      <div>{renderedButtons}</div>
    </SettingsRow>
  );
};

const ThemeButton = styled.button<{ $current: string }>`
  border-radius: 0.45rem;

  background-color: ${(props) => `${props.$current}`};

  height: 2.2rem;

  margin-left: 1rem;

  width: 2.25rem;
`;

export default SettingsTheme;
