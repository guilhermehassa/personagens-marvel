import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import List from '../components/List';
import Footer from '../components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header/>
        <Hero />
        <Filter />
        <List />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
