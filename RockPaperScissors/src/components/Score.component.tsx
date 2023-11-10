import { Logo, ScoreContainer, ScoreStyle } from "./Score.style";
import useGameStore from "../context/gameContex";

const Score = () => {
  const { score } = useGameStore();

  return (
    <ScoreContainer>
      <Logo />
      <ScoreStyle>
        <h1>SCORE</h1>
        <p>{score}</p>
      </ScoreStyle>
    </ScoreContainer>
  );
};
export default Score;
