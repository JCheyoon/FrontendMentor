import styled from "styled-components";
import { ReactComponent as logo } from "../assets/logo-bonus.svg";
export const ScoreContainer = styled.div`
  width: 800px;
  border: 2px solid hsl(217, 16%, 45%);
  color: hsl(217, 16%, 45%);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 40px 0 120px 0;
`;

export const ScoreStyle = styled.div`
  width: 120px;
  height: 70px;
  background: #ffffff;
  border-radius: 9px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: hsl(229, 64%, 46%);
    letter-spacing: 2px;
    margin: 0;
    font-size: 20px;
    padding: 10px;
  }
  p {
    margin: 0;
    font-weight: bolder;
    font-size: 58px;
    padding-bottom: 10px;
  }
`;
export const Logo = styled(logo)``;
