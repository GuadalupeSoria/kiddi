import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-colors";
  const variantStyles = {
    primary: "bg-pink-400 text-white hover:bg-pink-500",
    secondary: "bg-sky-100 text-gray-800 hover:bg-sky-200"
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;