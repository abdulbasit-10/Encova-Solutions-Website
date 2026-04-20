import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to, 
  href, 
  onClick, 
  className = '',
  disabled = false,
  icon,
  ...props 
}) => {
  const baseStyles = 'group inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';
  
  const variants = {
    primary: 'bg-gray-500 hover:bg-[#535A68] text-white  focus:ring-gray-200 shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50',
    secondary: 'bg-gray-700 hover:bg-gray-400 hover:text-white text-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-gray-300 bg-white/50 text-black hover:bg-[#535A68] focus:ring-gray-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-500',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ''} ${className}`;
  
  const content = (
    <>
      {icon && (
        <span className="mr-2 flex items-center">
          {React.isValidElement(icon)
            ? React.cloneElement(icon, {
                className: `${icon.props.className ?? ''} transition-colors duration-200 group-hover:text-white`,
              })
            : icon}
        </span>
      )}
      {children}
    </>
  );
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;

