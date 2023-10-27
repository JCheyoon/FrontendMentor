import styled from "styled-components";

export const RulesContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  top: 25%;
  left: 0;
  right: 0;
  width: 500px;
  height: 500px;
  background: white;
  z-index: 99;
  border-radius: 20px;
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
`;

export const CloseRulesBtn = styled.button`
  position: absolute;
  top: 1%;
  right: 5%;
  background: none;
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  cursor: pointer;

  span {
    font-size: 40px;
  }
`;
