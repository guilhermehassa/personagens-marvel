import { useState } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import List from '../components/List';
import Footer from '../components/Footer';


function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");

  return (
      <div className="App">
        <Header/>
        <Hero onSearch={setSearchTerm} />
        <Filter onSortOrderChange={setSortOrder}  />
        <List searchTerm={searchTerm} sortOrder={sortOrder} />
        <Footer />
      </div>
  );
}

export default Home ;
