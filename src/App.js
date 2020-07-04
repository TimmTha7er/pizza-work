import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Content from './components/Content';
import EmptyCart from './components/EmptyCart';

import './scss/index.scss';

// немного попарвить верстку:
//    1 header   user-bar вернуть border-radius на разрешениях меньше 480 и padding-top увеличить
//    2 cart      сделать нормальный hover на кнопках '+' '-' 'x'

// разделить верстрку на компоненты

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
