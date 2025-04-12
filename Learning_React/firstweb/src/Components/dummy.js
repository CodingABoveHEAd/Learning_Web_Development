import Axios from "./Learn_fetch/usingAxios";
import Swr from "./Learn_fetch/Swr";
import { Suspense } from "react";
import Query from "./Learn_fetch/Query";
import { useState,useEffect } from "react";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
  
export default function Dummy() {
const client = new QueryClient();
  return (
    <Suspense fallback={<h2>Loading data...</h2>}>
  <QueryClientProvider client={client}>
  <Query />
  <Query />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
      
    </Suspense>
  );
}
