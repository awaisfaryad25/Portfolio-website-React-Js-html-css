

const Button = ({ title, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2.5 font-semibold rounded-md bg-[var(--secondary)] ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
