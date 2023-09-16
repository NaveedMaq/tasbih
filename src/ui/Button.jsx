const Button = ({ children, onClick, disabled = false }) => {
  // Define your button styles as a JavaScript object
  const buttonStyles = {
    backgroundColor: '#444',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    fontSize: '16px',
    // display: 'inline-block',
  };

  return (
    <button style={buttonStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
