import { useState } from 'react';
import { useFavorite } from '../context/FavoriteContext'; // Ajuste o caminho conforme necessário
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import List from '../components/List';
import Footer from '../components/Footer';

function Home() {
  const { favoriteHeroes, setFavoriteHeroes } = useFavorite();
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
