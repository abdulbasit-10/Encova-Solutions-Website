import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'large',
  ...props 
}) => {
  const paddingStyles = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };

  return (
    <div 
      className={`bg-white rounded-2xl border border-gray-50 hover:shadow-2xl${paddingStyles[padding]} ${
        hover ? 'hover:border-gray-500' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

