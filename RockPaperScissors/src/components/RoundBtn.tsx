import {
  BottomContainer,
  MiddleContainer,
  RoundBtnStyle,
  TopContainer,
} from "./RoundBtn.style";
import { ReactComponent as Lizard } from "../assets/icon-lizard.svg";
import { ReactComponent as Paper } from "../assets/icon-paper.svg";
import { ReactComponent as Rock } from "../assets/icon-rock.svg";
import { ReactComponent as Scissors } from "../assets/icon-scissors.svg";
import { ReactComponent as Spock } from "../assets/icon-spock.svg";

const RoundButton = () => {
  return (
    <>
      <TopContainer>
        <RoundBtnStyle className="orange">
          <Scissors />
        </RoundBtnStyle>
      </TopContainer>
      <MiddleContainer>
        <RoundBtnStyle className="lightBlue">
          <Spock />
        </RoundBtnStyle>
        <RoundBtnStyle className="blue">
          <Paper />
        </RoundBtnStyle>
      </MiddleContainer>
      <BottomContainer>
        <RoundBtnStyle className="purple">
          <Lizard />
        </RoundBtnStyle>
        <RoundBtnStyle className="red">
          <Rock />
        </RoundBtnStyle>
      </BottomContainer>
    </>
  );
};
export default RoundButton;
