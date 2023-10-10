import "./App.css";
import Score from "./components/Score.component";
import Start from "./components/Start.component";
import { RulesBtn } from "./components/Rules.style";

function App() {
  return (
    <>
      <Score />
      <Start />
      <RulesBtn>RULES</RulesBtn>
    </>
  );
}

export default App;
