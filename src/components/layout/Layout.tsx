import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export interface LayoutMainProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutMainProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};
