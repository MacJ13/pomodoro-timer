import styled from "styled-components";
import { THEMES } from "../../constants/constants";

const ChangeThemes = () => {
  const renderedButtons = THEMES.map((theme) => {
    return (
      <ThemeButton
        key={theme}
        onClick={() => {
          console.log("click");
        }}
        $current={theme}
      />
    );
  });
  return <div>{renderedButtons}</div>;
};

const ThemeButton = styled.button<{ $current: string }>`
  border-radius: 0.45rem;

  background-color: ${(props) => `${props.$current}`};

  height: 2.5rem;

  margin-right: 1rem;

  width: 2.5rem;
`;

export default ChangeThemes;
