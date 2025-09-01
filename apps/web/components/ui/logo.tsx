import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Clipboard background */}
        <rect x="15" y="10" width="70" height="80" rx="4" ry="4" fill="#4A5568" stroke="#2D3748" strokeWidth="2"/>
        
        {/* Clipboard clip */}
        <rect x="35" y="5" width="30" height="12" rx="2" ry="2" fill="#4A5568" stroke="#2D3748" strokeWidth="1"/>
        <circle cx="50" cy="11" r="2" fill="#E2E8F0"/>
        
        {/* White paper */}
        <rect x="20" y="18" width="60" height="65" rx="2" ry="2" fill="#FFFFFF"/>
        
        {/* House icon */}
        <g transform="translate(35, 35)">
          {/* House roof */}
          <polygon points="15,15 30,5 45,15" fill="#4A5568"/>
          {/* House base */}
          <rect x="20" y="15" width="20" height="20" fill="#4A5568"/>
          {/* Door */}
          <rect x="25" y="25" width="4" height="10" fill="#FFFFFF"/>
          {/* Window */}
          <rect x="32" y="20" width="4" height="4" fill="#FFFFFF"/>
        </g>
        
        {/* PRO banner */}
        <g transform="translate(55, 55)">
          <path d="M0,0 L25,0 L20,12 L-5,12 Z" fill="#2563EB"/>
          <text x="10" y="8" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">PRO</text>
        </g>
      </svg>
    </div>
  );
}

export function LogoWithText({ className = '', size = 'md' }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Logo size={size} />
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-900">Landlord</span>
        <span className="text-xl font-bold text-blue-600">PDF Pro</span>
      </div>
    </div>
  );
}
