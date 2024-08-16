import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import List from '../components/List';
import Footer from '../components/Footer';

function Home({ data }) {
  const { favoriteHeroes, setFavoriteHeroes } = useOutletContext();
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");

  const handleToggleFavorites = (status) => {
    setShowFavoritesOnly(status);
  };

  return (
    <div className="App">
      <Header />
      <Hero onSearch={setSearchTerm} />
      <Filter
        onSortOrderChange={setSortOrder}
        onToggleFavorites={handleToggleFavorites}
      />
      <List
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        showFavoritesOnly={showFavoritesOnly}
        favoriteHeroes={favoriteHeroes} 
        setFavoriteHeroes={setFavoriteHeroes}
      />
      <Footer />
    </div>
  );
}

export default Home;
