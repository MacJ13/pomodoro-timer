import { useDispatch, useSelector } from "react-redux";
import { changeStageTime, selectAllStages } from "../../redux/stagesSlice";
import SettingsInput from "./SettingsInput";
import SettingsRow from "./SettingsRow";
import { capitalize } from "../../helpers/helpers";
import { Label } from "src/components/styles/Label.styled";
import { Flex } from "src/components/styles/Flex.styled";

const ChangeDuration = () => {
  const dispatch = useDispatch();
  const stages = useSelector(selectAllStages);

  const renderedFields = stages.map((stage) => {
    const minute = stage.duration / 60;
    const name = capitalize(stage.name);

    return (
      <Flex key={stage.id} $gap="1rem" $justify="space-between">
        <Label>{name}</Label>
        <SettingsInput
          count={minute}
          onChange={(newMinute) => {
            const newDuration = newMinute * 60;
            dispatch(changeStageTime({ id: stage.id, newDuration }));
          }}
        />
      </Flex>
    );
  });

  return (
    <SettingsRow title="Timers">
      <Flex $direction="column" $gap="0.5rem" $align="flex-end">
        {renderedFields}
      </Flex>
    </SettingsRow>
  );
};

export default ChangeDuration;
