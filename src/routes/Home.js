import Header from '../components/Header';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import List from '../components/List';
import Footer from '../components/Footer';


function Home() {
  return (
      <div className="App">
        <Header/>
        <Hero />
        <Filter />
        <List />
        <Footer />
      </div>
  );
}

export default Home ;
