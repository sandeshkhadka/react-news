import { useState } from "react";
import Nav from "./components/Nav";
import PostList from "./components/PostList";
import SelectionContext from "./slectionContext";
import Selector from "./components/Selector";
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
          <Selector />
          <PostList />
        </QueryClientProvider>
      </SelectionContext.Provider>
    </div>
  );
}

export default App;
