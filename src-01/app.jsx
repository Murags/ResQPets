import React from "react";
import ReactDOM from "react-dom";
import Search_params from "./search_params";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});


const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <header>
          <Link to="/">ADOPT ME!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<Search_params />}></Route>
        </Routes>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
