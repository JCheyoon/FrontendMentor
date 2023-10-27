import { CloseRulesBtn, RulesContainer } from "./Rules.style";
import { useContext } from "react";
import { ModalContext } from "../context/modalContext";

const Rules = () => {
  const { show, hideModal } = useContext(ModalContext);
  return (
    <>
      {show ? (
        <RulesContainer>
          <CloseRulesBtn onClick={hideModal}>
            <span className="material-symbols-outlined">close</span>
          </CloseRulesBtn>
          <h1>Rules</h1>
        </RulesContainer>
      ) : null}
    </>
  );
};
export default Rules;
