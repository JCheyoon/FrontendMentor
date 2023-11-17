interface Props {
  title: string;
  ghost: boolean;
  confirm?: boolean;
}
const Button = ({ title, ghost, confirm }: Props) => {
  return (
    <>
      {ghost ? (
        <button className="ghost">{title}</button>
      ) : confirm ? (
        <button className="confirm">{title}</button>
      ) : (
        <button>{title}</button>
      )}
    </>
  );
};

export default Button;
