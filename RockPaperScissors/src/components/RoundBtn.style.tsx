import styled from "styled-components";

export const TopContainer = styled.div``;
export const MiddleContainer = styled.div`
  padding-bottom: 60px;
`;
export const BottomContainer = styled.div``;
export const RoundBtnStyle = styled.button`
  border: 20px solid;
  background: white;
  width: 160px;
  height: 160px;
  border-radius: 50%;

  &.relative {
    position: relative;
    cursor: pointer;
  }
  &.fix-margin {
    margin-top: -70px;
  }

  &.scissors {
    border-color: hsl(39, 89%, 49%);
    -webkit-box-shadow: 0px 5px 0px 2px hsl(39, 89%, 37%);
    box-shadow: 0px 5px 0px 2px hsl(39, 89%, 37%);
  }

  &.spock {
    border-color: hsl(189, 59%, 53%);
    -webkit-box-shadow: 0px 5px 0px 2px hsl(189, 54%, 40%);
    box-shadow: 0px 5px 0px 2px hsl(189, 54%, 40%);
    left: -15%;
  }

  &.paper {
    border-color: hsl(230, 89%, 62%);
    -webkit-box-shadow: 0px 5px 0px 2px hsl(230, 58%, 48%);
    box-shadow: 0px 5px 0px 2px hsl(230, 58%, 48%);
    left: 15%;
  }

  &.lizard {
    border-color: hsl(261, 73%, 60%);
    -webkit-box-shadow: 0px 5px 0px 2px hsl(261, 50%, 39%);
    box-shadow: 0px 5px 0px 2px hsl(261, 50%, 39%);
    left: -5%;
  }

  &.rock {
    border-color: hsl(349, 71%, 52%);
    -webkit-box-shadow: 0px 5px 0px 2px hsl(349, 69%, 39%);
    box-shadow: 0px 5px 0px 2px hsl(349, 69%, 39%);
    left: 5%;
  }
`;
