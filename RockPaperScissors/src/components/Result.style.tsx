import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #ffffff;
  h1 {
    padding-bottom: 30px;
    font-size: 18px;
    letter-spacing: 2px;
    margin: 0;
    height: 80px;
  }

  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

export const PickContainer = styled.div`
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 150px;
    padding: 10px;
  }

  @media screen and (max-width: 450px) {
    width: 150px;
    padding: 10px;
  }
`;

export const ResetContainer = styled.div`
  padding: 30px;
  h1 {
    padding-bottom: 5px;
    font-size: 28px;
  }
`;
export const EmptyDiv = styled.div`
  width: 220px;
`;
export const PlayAgainBtn = styled.button`
  text-decoration: none;
  border: none;
  width: 160px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  letter-spacing: 2px;
`;

export const EmptyBtn = styled.div`
  background: hsl(237, 49%, 15%) 90%;
  width: 160px;
  height: 160px;
  border-radius: 50%;

  @media screen and (max-width: 640px) {
    width: 100px;
    height: 100px;
  }
`;
