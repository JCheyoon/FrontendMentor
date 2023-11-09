import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffffff;
  h1 {
    padding-bottom: 30px;
    font-size: 18px;
    letter-spacing: 2px;
    margin: 10px;
  }
`;

export const PickContainer = styled.div`
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResetContainer = styled.div`
  padding: 30px;
  h1 {
    padding-bottom: 5px;
    font-size: 28px;
  }
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
`;
