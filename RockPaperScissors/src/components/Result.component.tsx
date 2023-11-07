import { PlayAgainBtn } from "./Result.style";
import useGameStore from "../context/gameContex";

const Result = () => {
  const { playAgain } = useGameStore();
  return (
    <div>
      <h1>result</h1>
      <PlayAgainBtn onClick={playAgain}>PLAY AGAIN</PlayAgainBtn>
    </div>
  );
};

export default Result;
