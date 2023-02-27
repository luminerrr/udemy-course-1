import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Product from './views/Product';

function App() {
  return (<>
   

    <BrowserRouter>
      <Header />

      <Footer />
      <div className='p-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </div>
      
    </BrowserRouter>
    
  </>);
}

export default App;
