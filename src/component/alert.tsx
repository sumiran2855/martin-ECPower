import { useState, useEffect, useCallback } from 'react';
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from 'lucide-react';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  message: string;
  type?: AlertType;
  duration?: number; 
  isOpen?: boolean;
  onClose?: () => void;
  showIcon?: boolean;
  description?: string;
}

export const Alert = ({
  message,
  type = 'info',
  duration = 5000,
  isOpen = true,
  onClose,
  showIcon = true,
  description,
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300); 
  }, [onClose]);

  useEffect(() => {
    setIsVisible(isOpen);
    setIsExiting(false);
    
    if (duration && isOpen && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, handleClose]);

  if (!isVisible) return null;

  const alertStyles = {
    success: {
      background: 'bg-green-50',
      border: 'border-l-4 border-green-500',
      text: 'text-green-800',
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      shadow: 'shadow-lg shadow-green-100',
    },
    error: {
      background: 'bg-red-50',
      border: 'border-l-4 border-red-500',
      text: 'text-red-800',
      icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      shadow: 'shadow-lg shadow-red-100',
    },
    warning: {
      background: 'bg-yellow-50',
      border: 'border-l-4 border-yellow-500',
      text: 'text-yellow-800',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
      shadow: 'shadow-lg shadow-yellow-100',
    },
    info: {
      background: 'bg-blue-50',
      border: 'border-l-4 border-blue-500',
      text: 'text-blue-800',
      icon: <Info className="h-5 w-5 text-blue-500" />,
      shadow: 'shadow-lg shadow-blue-100',
    },
  };

  const currentStyle = alertStyles[type];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-2 flex justify-center pointer-events-none sm:py-4">
      <div 
        className={`
          ${currentStyle.background}
          ${currentStyle.border}
          ${currentStyle.text}
          ${currentStyle.shadow}
          w-full max-w-md rounded-lg border px-4 py-3
          flex items-start
          pointer-events-auto
          transform transition-all duration-300 ease-in-out
          ${isExiting ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}
          sm:px-6
        `}
      >
        <div className="flex-1 flex">
          {showIcon && (
            <div className="flex-shrink-0 mr-3 mt-0.5">
              {currentStyle.icon}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-sm sm:text-base">{message}</h3>
            {description && (
              <div className="mt-1 text-sm opacity-90">{description}</div>
            )}
          </div>
        </div>
        <button
          onClick={handleClose}
          className="ml-auto flex-shrink-0 -mr-1 flex items-center justify-center h-6 w-6 rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none cursor-pointer transition-colors duration-200"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export const useAlerts = () => {
  const [alerts, setAlerts] = useState<Array<{ id: string; props: AlertProps }>>([]);

  const addAlert = useCallback((alertProps: AlertProps) => {
    const id = Math.random().toString(36).substring(2, 9);
    setAlerts((prev) => [...prev, { id, props: alertProps }]);
    
    if (alertProps.duration && alertProps.duration > 0) {
      setTimeout(() => {
        removeAlert(id);
      }, alertProps.duration + 600); 
    }
  }, []);

  const removeAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }, []);

  const AlertList = () => (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 flex flex-col items-center gap-2">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          {...alert.props}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
    </div>
  );

  return {
    alerts,
    addAlert,
    removeAlert,
    AlertList,
  };
};