import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { FavoriteProvider } from './context/FavoriteContext'; // Ajuste o caminho conforme necessário

const queryClient = new QueryClient();

export default function App() {
  const [favoriteHeroes, setFavoriteHeroes] = useState([]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteProvider value={{ favoriteHeroes, setFavoriteHeroes }}>
        <Outlet />
      </FavoriteProvider>
    </QueryClientProvider>
  );
}
