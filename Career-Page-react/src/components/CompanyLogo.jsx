import React from 'react';

const CompanyLogo = ({ logoUrl, companyName, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20'
  };

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} bg-white rounded-lg shadow-sm overflow-hidden`}>
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt={`${companyName} logo`}
          className="w-full h-full object-contain p-1"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/default-company-logo.svg';
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-xs font-medium">{companyName.charAt(0).toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};

export default CompanyLogo;