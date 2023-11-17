import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
  <button onClick={onClick} className="btn btn-success m-5">{label} </button>

);

export default Button;