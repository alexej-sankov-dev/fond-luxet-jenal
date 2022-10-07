import './App.scss';
import Header from './components/Header';
import Home from './components/Home';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [ accounts, setAccounts ] = useState([])
  return (
    <div className='app'>
      <div className='wrapper'>
        <Header accounts={accounts} setAccounts={setAccounts} />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
