import styled from "styled-components";
import { ReactComponent as RulesPic } from "../assets/image-rules-bonus.svg";

export const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
`;
export const RulesContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  top: 25%;
  left: 0;
  right: 0;
  width: 400px;
  height: 450px;
  background-color: white;
  z-index: 2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    position: absolute;
    top: 1%;
    left: 5%;
    color: hsl(229, 25%, 31%);
  }
`;

export const RulesPicture = styled(RulesPic)`
  padding-top: 30px;
`;
export const OpenRulesBtn = styled.button`
  border: 2px solid hsl(217, 16%, 45%);
  color: hsl(217, 16%, 45%);
  border-radius: 10px;
  font-size: 20px;
  position: fixed;
  background: none;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  bottom: 40px;
  right: 40px;
  padding: 10px 30px;

  @media screen and (max-width: 640px) {
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CloseRulesBtn = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  background: none;
  color: #b5b8c8;
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  cursor: pointer;

  span {
    font-size: 40px;
  }
`;
