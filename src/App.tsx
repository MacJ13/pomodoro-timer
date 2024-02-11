import Header from "./components/header/Header";
import Container from "./components/Container/Container";
import PomodoroTimer from "./features/pomodoro";
import Settings from "./features/settings";
import SoundEffect from "./features/sound";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <SoundEffect />
        <Header />
        <Settings />
        <PomodoroTimer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
