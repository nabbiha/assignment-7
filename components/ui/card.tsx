import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border rounded-lg shadow-md p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`mb-4 font-bold text-lg ${className}`}>{children}</div>
  );
};

export const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`mt-4 border-t pt-2 text-gray-600 ${className}`}>{children}</div>;
};
