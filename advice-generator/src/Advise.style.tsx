import styled from "styled-components";

import { ReactComponent as dice } from "./images/dice.svg";
import { ReactComponent as patternDivider } from "./images/pattern-divider-desktop.svg";
import { ReactComponent as patternDividerMobile } from "./images/pattern-divider-mobile.svg";
export const AdviseStyle = styled.div`
  font-family: "Manrope", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313a49;
  max-width: 450px;
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  flex-direction: column;
  text-align: center;
  color: #cee3e9;
  padding: 30px 50px 10px 50px;

  font-size: 26px;
  font-weight: bold;

  h1 {
    color: #50ffa9;
    letter-spacing: 5px;
    font-size: 18px;
  }
  @media screen and (max-width: 560px) {
    max-width: 300px;
  }

  @media screen and (max-width: 460px) {
    max-width: 210px;
  }
`;

export const AdviseBtnStyle = styled.button`
  border: none;
  background-color: #50ffa9;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  bottom: -45px;

  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgb(80, 255, 169);
  }
`;

export const Dice = styled(dice)``;
export const PatternDivider = styled(patternDivider)``;
export const PatternDividerMobiLe = styled(patternDividerMobile)``;
