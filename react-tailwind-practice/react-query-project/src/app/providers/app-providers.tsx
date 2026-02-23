import { queryClient } from "@/lib/react-query/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
// import type { PropsWithChildren } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface AppProvidersProps {
  children: React.ReactNode;
}
// or
// type AppProvidersProps = PropsWithChildren;
const isDevMode = import.meta.env.DEV;

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {isDevMode && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
