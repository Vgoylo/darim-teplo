import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productions from './components/Productions/Productions';
import Delivery from './components/Delivery/Delivery';
import Abouts from './components/Abouts/Abouts';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/about-as" element={<Abouts />} />
          <Route path="/main" element={<Main />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
