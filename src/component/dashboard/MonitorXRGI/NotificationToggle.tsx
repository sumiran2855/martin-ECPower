'use client'
import React from 'react';

interface Props {
  isEnabled: boolean;
  onChange: (value: boolean) => void;
}

const NotificationToggle: React.FC<Props> = ({ isEnabled, onChange }) => (
  <div 
    className={`relative w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
      isEnabled ? 'bg-blue-600' : 'bg-gray-200'
    }`}
    onClick={() => onChange(!isEnabled)}
  >
    <div 
      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
        isEnabled ? 'translate-x-6' : 'translate-x-0'
      }`} 
    />
  </div>
);

export default NotificationToggle;
