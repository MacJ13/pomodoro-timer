import { useSelector } from "react-redux";
import { selectAllStages } from "../../redux/stagesSlice";
import styled from "styled-components";
import Input from "./Input";
import SettingsRow from "./SettingsRow";
import { capitalize } from "../../helpers/helpers";

const ChangeDuration = () => {
  const stages = useSelector(selectAllStages);

  const renderedFields = stages.map((stage) => {
    const minute = stage.duration / 60;
    const name = capitalize(stage.name);

    return (
      <Stage key={stage.id}>
        <Label>{name}</Label>
        <Input
          count={minute}
          onChange={(newMinute) => {
            const newDuration = newMinute * 60;
            console.log(newDuration);
          }}
        />
      </Stage>
    );
  });

  return (
    <SettingsRow title="Timers">
      <div>{renderedFields}</div>
    </SettingsRow>
  );
};

const Stage = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  color: rgba(0, 0, 0, 0.25);
  font-size: 0.875rem;
  font-weight: 600;
  margin-right: 1rem;
`;

export default ChangeDuration;
