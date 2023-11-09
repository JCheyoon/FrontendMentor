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
import useGameStore from "../context/gameContex";

const RoundButton = () => {
  const { play } = useGameStore();
  return (
    <>
      <TopContainer>
        <RoundBtnStyle
          className="scissors fix-margin relative"
          onClick={() => play("scissors")}
        >
          <Scissors />
        </RoundBtnStyle>
      </TopContainer>
      <MiddleContainer>
        <RoundBtnStyle className="spock relative" onClick={() => play("spock")}>
          <Spock />
        </RoundBtnStyle>
        <RoundBtnStyle className="paper relative" onClick={() => play("paper")}>
          <Paper />
        </RoundBtnStyle>
      </MiddleContainer>
      <BottomContainer>
        <RoundBtnStyle
          className="lizard relative"
          onClick={() => play("lizard")}
        >
          <Lizard />
        </RoundBtnStyle>
        <RoundBtnStyle className="rock relative" onClick={() => play("rock")}>
          <Rock />
        </RoundBtnStyle>
      </BottomContainer>
    </>
  );
};
export default RoundButton;
