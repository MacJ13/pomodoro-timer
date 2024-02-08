import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container/Container";
import PomodoroTimer from "./features/pomodoro";
import Settings from "./features/settings";
import SoundEffect from "./features/sound";

function App() {
  return (
    <Container>
      <SoundEffect />
      <Header>
        <Navbar />
      </Header>
      <Settings />
      <PomodoroTimer />
    </Container>
  );
}

export default App;
