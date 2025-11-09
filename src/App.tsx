import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Store } from './Pages/Store';
import { About } from './Pages/About';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
