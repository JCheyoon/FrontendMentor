import { StartContainer } from "./Start.style";
import RoundButton from "./RoundBtn";
import useGameStore from "../context/gameContex";
import Result from "./Result.component";

const Start = () => {
  const { isSelected } = useGameStore();

  return (
    <>
      {isSelected ? (
        <Result />
      ) : (
        <StartContainer>
          <RoundButton />
        </StartContainer>
      )}
    </>
  );
};
export default Start;
