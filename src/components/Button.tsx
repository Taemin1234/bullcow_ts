interface ButtonProps {
  children:number | string;
  onClick:() => void;
  className: string;
  disabled?: boolean;
}

function Button({ children, onClick, className = "", disabled }:ButtonProps) {
  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
