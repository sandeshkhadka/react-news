import { useState } from "react";
import Nav from "./components/Nav";
import HeadLineList from "./components/HeadLineList";
import SelectionContext from "./slectionContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const countryState = useState("us");
  const categoryState = useState("technology");
  const selectionContext = {
    country: countryState,
    category: categoryState,
  };
  return (
    <div>
      <SelectionContext.Provider value={selectionContext}>
        <QueryClientProvider client={queryClient}>
          <Nav />
          <HeadLineList />
        </QueryClientProvider>
      </SelectionContext.Provider>
    </div>
  );
}

export default App;
