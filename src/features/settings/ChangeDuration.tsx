import { useDispatch, useSelector } from "react-redux";
import { changeStageTime, selectAllStages } from "../../redux/stagesSlice";
import styled from "styled-components";
import SettingsInput from "./SettingsInput";
import SettingsRow from "./SettingsRow";
import { capitalize } from "../../helpers/helpers";

const ChangeDuration = () => {
  const dispatch = useDispatch();
  const stages = useSelector(selectAllStages);

  const renderedFields = stages.map((stage) => {
    const minute = stage.duration / 60;
    const name = capitalize(stage.name);

    return (
      <Stage key={stage.id}>
        <Label>{name}</Label>
        <SettingsInput
          count={minute}
          onChange={(newMinute) => {
            const newDuration = newMinute * 60;
            dispatch(changeStageTime({ id: stage.id, newDuration }));
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
