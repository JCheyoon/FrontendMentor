import {
  BottomContainer,
  LizardSvg,
  MiddleContainer,
  PaperSvg,
  RockSvg,
  RoundBtnStyle,
  ScissorsSvg,
  SpockSvg,
  TopContainer,
} from "./RoundBtn.style";

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
          <ScissorsSvg />
        </RoundBtnStyle>
      </TopContainer>
      <MiddleContainer>
        <RoundBtnStyle className="spock relative" onClick={() => play("spock")}>
          <SpockSvg />
        </RoundBtnStyle>
        <RoundBtnStyle className="paper relative" onClick={() => play("paper")}>
          <PaperSvg />
        </RoundBtnStyle>
      </MiddleContainer>
      <BottomContainer>
        <RoundBtnStyle
          className="lizard relative"
          onClick={() => play("lizard")}
        >
          <LizardSvg />
        </RoundBtnStyle>
        <RoundBtnStyle className="rock relative" onClick={() => play("rock")}>
          <RockSvg />
        </RoundBtnStyle>
      </BottomContainer>
    </>
  );
};
export default RoundButton;
