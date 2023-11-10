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
          aria-label="Scissor Button"
          className="scissors fix-margin relative"
          onClick={() => play("scissors")}
        >
          <ScissorsSvg />
        </RoundBtnStyle>
      </TopContainer>
      <MiddleContainer>
        <RoundBtnStyle
          aria-label="Spock Button"
          className="spock relative"
          onClick={() => play("spock")}
        >
          <SpockSvg />
        </RoundBtnStyle>
        <RoundBtnStyle
          aria-label="Paper Button"
          className="paper relative"
          onClick={() => play("paper")}
        >
          <PaperSvg />
        </RoundBtnStyle>
      </MiddleContainer>
      <BottomContainer>
        <RoundBtnStyle
          aria-label="Lizard Button"
          className="lizard relative"
          onClick={() => play("lizard")}
        >
          <LizardSvg />
        </RoundBtnStyle>
        <RoundBtnStyle
          aria-label="Rock Button"
          className="rock relative"
          onClick={() => play("rock")}
        >
          <RockSvg />
        </RoundBtnStyle>
      </BottomContainer>
    </>
  );
};
export default RoundButton;
