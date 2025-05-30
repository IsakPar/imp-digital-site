'use client';

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  fluid = false,
  size = 'lg'
}) => {
  // Max-width variations based on PRD specifications
  const sizeClasses = {
    sm: 'max-w-3xl',     // 768px
    md: 'max-w-4xl',     // 896px  
    lg: 'max-w-6xl',     // 1200px (PRD specification)
    xl: 'max-w-7xl'      // 1280px
  };

  return (
    <div
      className={`
        ${fluid ? 'w-full' : sizeClasses[size]}
        mx-auto
        px-4 md:px-8 lg:px-16
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container; 