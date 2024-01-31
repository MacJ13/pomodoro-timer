import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container/Container";
import SwitchStages from "./features/stages/SwitchStages";

function App() {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <SwitchStages />
    </Container>
  );
}

export default App;
