import React, { createContext, useContext } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children, value }) {
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}
