import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container/Container";
import SwitchStages from "./features/stages/SwitchStages";
import PomodoroTimer from "./features/pomodoro";

function App() {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>

      <SwitchStages />
      <PomodoroTimer />
    </Container>
  );
}

export default App;
