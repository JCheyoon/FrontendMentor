import {
  BackDropContainer,
  CloseRulesBtn,
  RulesContainer,
  RulesPicture,
} from "./Rules.style";
import { useContext } from "react";
import { ModalContext } from "../context/modalContext";
const Rules = () => {
  const { show, hideModal } = useContext(ModalContext);
  return (
    <>
      {show ? (
        <>
          <BackDropContainer />
          <RulesContainer>
            <CloseRulesBtn onClick={hideModal}>
              <span className="material-symbols-outlined">close</span>
            </CloseRulesBtn>
            <h1>RULES</h1>
            <RulesPicture />
          </RulesContainer>
        </>
      ) : null}
    </>
  );
};
export default Rules;
