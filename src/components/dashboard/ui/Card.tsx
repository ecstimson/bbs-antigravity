import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-surface border border-border rounded-xl shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-border/50 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-medium text-gray-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);