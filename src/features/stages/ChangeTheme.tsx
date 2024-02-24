import { useSelector } from "react-redux";
import { selectPomodoroId } from "../../redux/pomodoroSlice";
import { selectStageColor } from "../../redux/stagesSlice";
import { RootState } from "../../redux/store";
import { Background } from "../../components/styles/Background.styled";
import { useEffect, useRef } from "react";

const ChangeTheme = () => {
  const stageId = useSelector(selectPomodoroId);

  const stageColor = useSelector((state: RootState) =>
    selectStageColor(state, stageId)
  )!;

  const hiddenRef = useRef<boolean>(document.hidden);

  const changeVisibility = () => {
    hiddenRef.current = document.hidden;
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", changeVisibility);

    return () => {
      document.removeEventListener("visibilitychange", changeVisibility);
    };
  }, [document.hidden]);

  return <Background $theme={stageColor} $hidden={hiddenRef.current} />;
};

export default ChangeTheme;
