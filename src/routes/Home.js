import { useState } from 'react';


import Header from '../components/Header';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import List from '../components/List';
import Footer from '../components/Footer';


function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  
  return (
      <div className="App">
        <Header/>
        <Hero onSearch={setSearchTerm} />
        <Filter />
        <List searchTerm={searchTerm} />
        <Footer />
      </div>
  );
}

export default Home ;
