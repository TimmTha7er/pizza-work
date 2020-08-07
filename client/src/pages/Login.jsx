import React from 'react';

const Login = () => {
  return (
    <div className='login page'>
      <div className='container login__container'>
        <h2 className='login__title'>Вход</h2>
        <form className='login-form' action=''>
          <div className='login-form__inputs'>
            <label className='login-form__label' htmlFor=''>
              Логин
            </label>
            <input
              className='login-form__input input'
              type='text'
              placeholder='Введите Email'
            />
            <label className='login-form__label' htmlFor=''>
              Пароль
            </label>
            <input
              className='login-form__input login-form__input_last input'
              type='password'
              placeholder='Введите пароль'
            />
          </div>
          <div className='login-form__btns'>
            <a href='' className='button button_grey login-form__reg-btn'>
              Регистрация
            </a>
            <a href='' className='button button_grey login-form__log-btn'>
              Войти
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
