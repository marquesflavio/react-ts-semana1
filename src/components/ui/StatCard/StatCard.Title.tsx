import * as React from "react";

interface StatCardTitleProps {
  children: React.ReactNode;
}

export const StatCardTitle = ({ children }: StatCardTitleProps) => {
  return <h2 className="text-lg text-gray-500 dark:text-gray-400">{children}</h2>;
    
};
