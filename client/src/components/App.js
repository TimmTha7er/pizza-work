import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';
import {
  Home,
  Cart,
  Auth,
  Login,
  Profile,
  Ordering,
  EditPizza,
  EditFilters,
} from '../pages';
import { Header, Footer, NotFound, CartEmpty } from './';

// TODO

// добавить кнопки удаления, редактирования и добавления для пиццы
// добавить кнопки удаления, редактирования и добавления для сортировки и фильтов
// 

// 1
// продолжить https://www.youtube.com/watch?v=iI5h4-pChho&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=5

// 2 Написать reducer и actions для редактирования пицц
// 3 Написать reducer и actions для редактирования фильта и сорттировки
// 4 Соединить все это с бэкэндом

// 5 Разобраться с логином и регистрацией на бэкэнде
// 6 Разобраться с редюсером и экшенами для регистрации и логина
// 7 Соединить все это

// 8 добавить обработку ошибок
// 9 сверстать NotFound, Spinner

// ?? возможно после всего подключить кассу
// хорошее видео по внедрению платежей на сайт
// https://www.youtube.com/watch?v=AfypOVaB5r0
// или с помощью robokassa
// или с помощью https://stripe.com/docs/stripe-js/react

const App = () => {
  // const isAuth = true;
  // let adminContent = null;

  // if (isAuth) {
  //   adminContent = <Route path='/edit-pizza' component={EditPizza} />;
  // }

  return (
    <div className='main-wrapper'>
      <Header />
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/auth' component={Auth} />
          <Route path='/cart' component={Cart} />
          <Route path='/empty-cart' component={CartEmpty} />
          <Route path='/login' component={Login} />
          <Route path='/ordering' component={Ordering} />
          <Route path='/profile' component={Profile} />
          <Route path='/pizza/:id' component={EditPizza} />
          <Route path='/filter' component={EditFilters} />
          {/* {adminContent} */}

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
