function Button({ children, onClick, className = "", disabled }) {
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
