import React from 'react';

const Login = () => {
  return (
    <div class='login page'>
      <div class='container login__container'>
        <h2 class='login__title'>Вход</h2>
        <form class='login-form' action=''>
          <div class='login-form__inputs'>
            <label class='login-form__label' for=''>
              Логин
            </label>
            <input
              class='login-form__input input'
              type='text'
              placeholder='Введите Email'
            />
            <label class='login-form__label' for=''>
              Пароль
            </label>
            <input
              class='login-form__input login-form__input_last input'
              type='password'
              placeholder='Введите пароль'
            />
          </div>
          <div class='login-form__btns'>
            <a href='' class='button button_grey login-form__reg-btn'>
              Регистрация
            </a>
            <a href='' class='button button_grey login-form__log-btn'>
              Войти
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
