import type { FilterProps } from "../types/filter";

export const Filter = ({ value, label, options, onChange }: FilterProps) => {
  return (
    <div className="w-2xs flex flex-col rounded-lg bg-white dark:bg-gray-800 p-4">
      <label
        htmlFor="filter-select"
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
      >
        {label}
      </label>

      <select
        onChange={(e) => onChange(e.target.value)}
        id="filter-select"
        className="
            w-full appearance-none
            rounded-lg border border-gray-300 dark:border-gray-700
            bg-white dark:bg-gray-800
            px-3 py-2 pr-10 text-sm text-gray-900 dark:text-gray-100
            shadow-sm
            hover:border-gray-400 dark:hover:border-gray-600
            transition-colors"
      >
        <option value={value} disabled>
          --Escolha uma opção--
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
