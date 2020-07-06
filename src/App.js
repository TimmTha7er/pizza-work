import React from 'react';
import { Header, EmptyCart } from './components';
import { Home, Cart } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/index.scss';

// немного попарвить верстку:
//    1 header   user-bar вернуть border-radius на разрешениях меньше 480 и padding-top увеличить
//    2 cart      сделать нормальный hover на кнопках '+' '-' 'x'



const NotFound = () => {
  return (
    <main>
      <div>!</div>
      <h2>Страница не найдена</h2>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <main>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/cart' component={Cart} />
            <Route path='/empty-cart' component={EmptyCart} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
