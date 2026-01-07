import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center border-b">
      <h1>Projeto Semana 1</h1>

      <div className="text-sm text-muted-foreground">Saldo: R$ 123,45</div>

      <div className="flex items-center gap-4">
        <span>Flávio Marques</span>
        <ThemeToggle />
      </div>
    </header>
  );
};
