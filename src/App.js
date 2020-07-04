import React from 'react';
import Header from './Header';
import Cart from './Cart';
import Content from './Content';
import EmptyCart from './EmptyCart';

import './scss/main.scss';



const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <main>
          <Content />
          <Cart />
          <EmptyCart />
        </main>
      </div>
    </>
  );
};

export default App;
