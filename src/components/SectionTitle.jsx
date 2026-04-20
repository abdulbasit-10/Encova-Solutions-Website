import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  className = '' 
}) => {
  return (
    <div className={` ${centered ? 'text-center' : ''} ${className}`}>
      {title && (
       <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
        {title}
      </h2> 
      )}
      
      <p className="text-black font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
    </div>
  );
};

export default SectionTitle;

