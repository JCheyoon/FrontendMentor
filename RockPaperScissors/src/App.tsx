import "./App.css";
import Score from "./components/Score.component";
import Start from "./components/Start.component";
import { OpenRulesBtn } from "./components/Rules.style";
import { ModalContext } from "./context/modalContext";
import { useContext } from "react";
import Rules from "./components/Rules.component";

function App() {
  const { showModal } = useContext(ModalContext);
  return (
    <>
      <Rules />
      <Score />
      <Start />
      <OpenRulesBtn onClick={showModal}>RULES</OpenRulesBtn>
    </>
  );
}

export default App;
