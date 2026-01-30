import * as React from "react";

interface StatCardDescriptionProps {
    children: React.ReactNode;
}

export const StatCardDescription = ({children}: StatCardDescriptionProps) => {
  return (
     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {children}
      </p>
  )
}
