import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Filter from './components/Filter';
import List from './components/List';
import Footer from './components/Footer';

function App() {
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

export default App;
