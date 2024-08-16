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
        <div className='404'>
          <h1>Nem os Heróis conseguiram encontrar sua pesquisa :(</h1>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
