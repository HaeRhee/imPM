"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({ children }: React.PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default QueryProvider;
