import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';
import { Home, Cart, Auth } from '../pages';
import { Header, NotFound, CartEmpty, EditPizza } from './';

// TODO
// 1
// продолжить

// 2 Когда будет сервак :
// продолжить https://youtu.be/Ix9iV72GMKg?t=7342
// сортировку и фильтр нужно делать на сервере т.е. наше приложение
// должно просто говорить какие данные оно хочет получить
// сервер должен делать все сложные манипуляции с данными и
// возвращать их
// ответ на мой вопрос в начале видео
// https://www.youtube.com/watch?v=IZVNNc8FHYg
// Значит решиться проблема в редюсерами для сортировка и
// не нужно будет дополнительный массив делать

// 3 Сверстать форму логина для сайта
// 4 сделать логин(jwt токен и т.д. как в видео)
// 5 Создать БД(mongoDB)
// 6 подключить mongoDB
// 7 Сделать сортировку с помощью БД

// 8 Добавить формы для категорий фильтра и сортировки и пицц
// 9 сделать добавление удаление редактирование пицц, фильров и сортировок

// 10 добавить обработку ошибок
// 11 сверстать NotFound, Spinner

const App = () => {
  const isAuth = true;
  let adminContent = null;

  if (isAuth) {
    adminContent = <Route path='/edit-pizza' component={EditPizza} />
  }

  return (
    <div className='container'>
      <Header />
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/auth' component={Auth} />
          <Route path='/cart' component={Cart} />
          <Route path='/empty-cart' component={CartEmpty} />
          {adminContent}
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
