const Button = ({ children, onClick, size = 5, disabled = false }) => {
  // Define your button styles as a JavaScript object
  const buttonStyles = {
    backgroundColor: '#444',
    color: '#fff',
    padding: `${size}px ${size * 2}px`,
    border: 'none',
    borderRadius: `${size * 3 > 15 ? 15 : size * 3}px`,
    cursor: 'pointer',
    fontSize: `${size * 3}px`,
  };

  return (
    <button style={buttonStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
