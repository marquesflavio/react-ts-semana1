import * as React from "react";

interface StatCardIconProps {
    children: React.ReactNode;
}

export const StatCardIcon = ({ children }: StatCardIconProps) => {
  return (
    <span className="text-gray-500 px-2">{children}</span>
  )
}
