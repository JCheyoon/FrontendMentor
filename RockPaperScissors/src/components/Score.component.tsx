import { Logo, ScoreContainer, ScoreStyle } from "./Score.style";

const Score = () => {
  return (
    <ScoreContainer>
      <Logo />
      <ScoreStyle>
        <h1>SCORE</h1>
        <p>12</p>
      </ScoreStyle>
    </ScoreContainer>
  );
};
export default Score;
