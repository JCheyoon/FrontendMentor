import {
  ComputerPickContainer,
  PlayAgainBtn,
  PlayerPickContainer,
  ResetContainer,
  ResultContainer,
} from "./Result.style";
import useGameStore from "../context/gameContex";
import { RoundBtnStyle } from "./RoundBtn.style";
import { ReactComponent as Lizard } from "../assets/icon-lizard.svg";
import { ReactComponent as Paper } from "../assets/icon-paper.svg";
import { ReactComponent as Rock } from "../assets/icon-rock.svg";
import { ReactComponent as Scissors } from "../assets/icon-scissors.svg";
import { ReactComponent as Spock } from "../assets/icon-spock.svg";

const Result = () => {
  const { playAgain } = useGameStore();
  return (
    <ResultContainer>
      <PlayerPickContainer>
        <h1>YOU PICKED</h1>
        <RoundBtnStyle className="orange">
          <Scissors />
        </RoundBtnStyle>
      </PlayerPickContainer>
      <ResetContainer>
        <h1>RESULT</h1>
        <PlayAgainBtn onClick={playAgain}>PLAY AGAIN</PlayAgainBtn>
      </ResetContainer>
      <ComputerPickContainer>
        <h1>THE HOUSE PICKED</h1>
        <RoundBtnStyle className="orange">
          <Scissors />
        </RoundBtnStyle>
      </ComputerPickContainer>
    </ResultContainer>
  );
};

export default Result;
