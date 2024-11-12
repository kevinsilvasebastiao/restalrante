import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/header/ItemList';
import Footer from './components/footer/footer';
import Cardapio from './components/cardapio/Cardapio';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cardapio/:id" element={<Cardapio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
