import { formatDateToBRL } from "../../utils/formatDateToBRL";
import { formatToBRL } from "../../utils/formatToBRL";

export interface TransactionProps {
  id: number;
  date: Date;
  description: string;
  amount: number;
  flow: "receita" | "despesa";
}

export const TransactionItem = ({
  description,
  date,
  amount,
  flow,
}: TransactionProps) => {
  const variantStyles = {
    receita: "text-green-600",
    despesa: "text-red-600",
  };
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 my-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-lg text-gray-500 dark:text-gray-400">{formatDateToBRL(date)}</span>
        <h2 className="text-lg text-gray-500 dark:text-gray-400 truncate">
          {description}
        </h2>

        <p className={`text-xl font-bold ${variantStyles[flow]}`}>
          {formatToBRL(amount)}
        </p>
      </div>
    </div>
  );
};
