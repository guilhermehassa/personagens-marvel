import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

export default function App() {
  const [favoriteHeroes, setFavoriteHeroes] = useState([]);
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet context={{ favoriteHeroes, setFavoriteHeroes }} />
    </QueryClientProvider>
  );
}
