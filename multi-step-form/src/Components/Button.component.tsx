interface Props {
  title: string;
  ghost: boolean;
  confirm?: boolean;
  disabled?: boolean;
}
const Button = ({ title, ghost, confirm, disabled }: Props) => {
  return (
    <>
      {ghost ? (
        <button className="ghost">{title}</button>
      ) : confirm ? (
        <button className="confirm">{title}</button>
      ) : (
        <button disabled={disabled}>{title}</button>
      )}
    </>
  );
};

export default Button;
