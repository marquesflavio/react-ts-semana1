export interface FilterOptions {
  label: string;
  value: string;
}
export interface FilterProps {
  label?: string | number;
  value: string | number;
  options: FilterOptions[];
  onChange: (value: string) => void;
}
