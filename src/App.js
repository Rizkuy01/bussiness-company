import React from 'react'; 
import Navbar from './components/Navbar';
import Main from './components/Main';
import Desc from './components/Desc';
import Contact from './components/Contact';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Desc />
      <Contact />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
