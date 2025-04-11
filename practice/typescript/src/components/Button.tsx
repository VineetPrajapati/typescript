interface ButtonType {
  label: string;
  onClick(): void;
  disabled: boolean;
}
const Button = ({ label, onClick, disabled }: ButtonType) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        <h1>{label}</h1>
      </button>
    </div>
  );
};

export default Button;
