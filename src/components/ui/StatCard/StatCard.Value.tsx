import * as React from "react";

interface StatCardValueProps {
  children: React.ReactNode;
  variant?: "positive" | "negative" | "neutral";
}

export const StatCardValue = ({
  children,
  variant = "neutral",
}: StatCardValueProps) => {
  const variantStyles = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-900 dark:text-white",
  };
  return (
    <p className={`text-xl font-bold ${variantStyles[variant]}`}>{children}</p>
  );
};
