import { formatToBRL } from "../../utils/formatToBRL";

interface StatCardProps {
  title: string;
  value: number;
  variant?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
  description?: string;
}

export const StatCard = ({
  title,
  value,
  icon,
  variant = "neutral",
}: StatCardProps) => {
  const variantStyles = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-900 dark:text-white",
  };

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 my-4 shadow-sm">
      <div className="flex justify-between">
        <h2 className="text-lg text-gray-500 dark:text-gray-400">
          {title}
        </h2>
        <span className="text-gray-500">{icon}</span>
      </div>

      <p className={`text-xl font-bold ${variantStyles[variant]}`}>
        {formatToBRL(value)}
      </p>
    </div>
  );
};
