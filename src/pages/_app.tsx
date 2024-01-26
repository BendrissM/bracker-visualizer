import React from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
