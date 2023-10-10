import { AdviseBtnStyle, Dice } from "./Advise.style";

interface Props {
  onClick: () => void;
}
const AdviseBtn = ({ onClick }: Props) => {
  return (
    <AdviseBtnStyle data-test="adviceBtn" onClick={onClick}>
      <Dice />
    </AdviseBtnStyle>
  );
};
export default AdviseBtn;
