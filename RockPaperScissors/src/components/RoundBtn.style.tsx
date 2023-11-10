import styled from "styled-components";
import { ReactComponent as Lizard } from "../assets/icon-lizard.svg";
import { ReactComponent as Paper } from "../assets/icon-paper.svg";
import { ReactComponent as Rock } from "../assets/icon-rock.svg";
import { ReactComponent as Scissors } from "../assets/icon-scissors.svg";
import { ReactComponent as Spock } from "../assets/icon-spock.svg";
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
  @media screen and (max-width: 640px) {
    width: 100px;
    height: 100px;
    border: 10px solid;
  }

  &.relative {
    position: relative;
    cursor: pointer;
  }
  &.fix-margin {
    margin-top: -70px;
    @media screen and (max-width: 640px) {
      margin-top: 5px;
    }
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

    @media screen and (max-width: 640px) {
      left: -25%;
    }
  }

  &.paper {
    border-color: hsl(230, 89%, 62%);
    -webkit-box-shadow: 0px 5px 0px 2px hsl(230, 58%, 48%);
    box-shadow: 0px 5px 0px 2px hsl(230, 58%, 48%);
    left: 15%;
    @media screen and (max-width: 640px) {
      left: 25%;
    }
  }

  &.lizard {
    border-color: hsl(261, 73%, 60%);
    -webkit-box-shadow: 0px 5px 0px 2px hsl(261, 50%, 39%);
    box-shadow: 0px 5px 0px 2px hsl(261, 50%, 39%);
    left: -5%;
    @media screen and (max-width: 640px) {
      left: -15%;
    }
  }

  &.rock {
    border-color: hsl(349, 71%, 52%);
    -webkit-box-shadow: 0px 5px 0px 2px hsl(349, 69%, 39%);
    box-shadow: 0px 5px 0px 2px hsl(349, 69%, 39%);
    left: 5%;
    @media screen and (max-width: 640px) {
      left: 15%;
    }
  }
`;

export const ScissorsSvg = styled(Scissors)`
  @media screen and (max-width: 640px) {
    transform: scale(0.7);
  }
`;
export const LizardSvg = styled(Lizard)`
  @media screen and (max-width: 640px) {
    transform: scale(0.7);
  }
`;
export const SpockSvg = styled(Spock)`
  @media screen and (max-width: 640px) {
    transform: scale(0.7);
  }
`;
export const PaperSvg = styled(Paper)`
  @media screen and (max-width: 640px) {
    transform: scale(0.7);
  }
`;
export const RockSvg = styled(Rock)`
  @media screen and (max-width: 640px) {
    transform: scale(0.7);
  }
`;
