import {
  EmptyBtn,
  PlayAgainBtn,
  PickContainer,
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
import { useEffect, useState } from "react";

const svgs = {
  rock: <Rock />,
  scissors: <Scissors />,
  lizard: <Lizard />,
  paper: <Paper />,
  spock: <Spock />,
};

const Result = () => {
  const { playAgain, playerChoice, computerChoice, result } = useGameStore();
  const [isTimePassed, setIsTimePassed] = useState(false);
  const [isComputerChose, setIsComputerChose] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsTimePassed(true);
    }, 500);

    setTimeout(() => {
      setIsComputerChose(true);
    }, 1000);
  }, []);

  return (
    <ResultContainer>
      <PickContainer>
        <h1>YOU PICKED</h1>
        <RoundBtnStyle className={playerChoice}>
          {svgs[playerChoice]}
        </RoundBtnStyle>
      </PickContainer>
      {isComputerChose ? (
        <ResetContainer>
          <h1>{result?.toUpperCase()}</h1>
          <PlayAgainBtn onClick={playAgain}>PLAY AGAIN</PlayAgainBtn>
        </ResetContainer>
      ) : null}
      <PickContainer>
        <h1>THE HOUSE PICKED</h1>
        {isTimePassed ? (
          <RoundBtnStyle className={computerChoice}>
            {svgs[computerChoice]}
          </RoundBtnStyle>
        ) : (
          <EmptyBtn />
        )}
      </PickContainer>
    </ResultContainer>
  );
};

export default Result;
