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
      <svg viewBox="0 0 512 512" className="w-full h-full">
        {/* Clipboard background */}
        <rect x="144" y="32" width="224" height="320" rx="16" ry="16" fill="#4A5568" stroke="#2D3748" strokeWidth="8"/>
        
        {/* Clipboard clip */}
        <rect x="192" y="16" width="128" height="48" rx="8" ry="8" fill="#4A5568" stroke="#2D3748" strokeWidth="4"/>
        <circle cx="256" cy="40" r="8" fill="#E2E8F0"/>
        
        {/* White paper */}
        <rect x="160" y="64" width="192" height="256" rx="4" ry="4" fill="#FFFFFF"/>
        
        {/* House icon */}
        <g transform="translate(200, 120)">
          {/* House base */}
          <rect x="16" y="48" width="80" height="64" fill="#4A5568"/>
          {/* House roof */}
          <polygon points="8,48 56,8 104,48" fill="#4A5568"/>
          {/* Door */}
          <rect x="40" y="80" width="16" height="32" fill="#FFFFFF"/>
          {/* Window */}
          <rect x="64" y="64" width="16" height="16" fill="#FFFFFF"/>
        </g>
        
        {/* PRO banner */}
        <g transform="translate(280, 200)">
          <path d="M0,0 L80,0 L60,40 L-20,40 Z" fill="#2B6CB0"/>
          <text x="30" y="25" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">PRO</text>
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
