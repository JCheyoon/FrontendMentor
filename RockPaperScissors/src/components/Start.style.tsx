import styled from "styled-components";
import pentagon from "../assets/bg-pentagon.svg";
export const StartContainer = styled.div`
  background-image: url("${pentagon}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 640px) {
    margin-top: 90px;
  }
`;
