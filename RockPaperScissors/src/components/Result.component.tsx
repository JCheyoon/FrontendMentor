import {
  EmptyBtn,
  PlayAgainBtn,
  PickContainer,
  ResetContainer,
  ResultContainer,
  EmptyDiv,
} from "./Result.style";
import useGameStore from "../context/gameContex";
import {
  LizardSvg,
  PaperSvg,
  RockSvg,
  RoundBtnStyle,
  ScissorsSvg,
  SpockSvg,
} from "./RoundBtn.style";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const svgs = {
  rock: <RockSvg />,
  scissors: <ScissorsSvg />,
  lizard: <LizardSvg />,
  paper: <PaperSvg />,
  spock: <SpockSvg />,
};

const Result = () => {
  const { playAgain, playerChoice, computerChoice, result } = useGameStore();
  const [isTimePassed, setIsTimePassed] = useState(false);
  const [isComputerChose, setIsComputerChose] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 550px)",
  });

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
      {isMobile ? null : (
        <ResetContainer>
          {isComputerChose ? (
            <>
              <h1>{result?.toUpperCase()}</h1>
              <PlayAgainBtn onClick={playAgain}>PLAY AGAIN</PlayAgainBtn>
            </>
          ) : null}
        </ResetContainer>
      )}
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
      {isMobile ? (
        <ResetContainer>
          {isComputerChose ? (
            <>
              <h1>{result?.toUpperCase()}</h1>
              <PlayAgainBtn onClick={playAgain}>PLAY AGAIN</PlayAgainBtn>
            </>
          ) : (
            <EmptyDiv />
          )}
        </ResetContainer>
      ) : null}
    </ResultContainer>
  );
};

export default Result;
