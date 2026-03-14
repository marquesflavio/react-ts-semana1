import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,  
      gcTime: 1000 * 60 * 10,    
      retry: 2,                   
      refetchOnWindowFocus: false 
    },
  },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}