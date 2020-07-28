import React, { useState, useContext } from 'react';

const request = async (url, method = 'GET', body = null, headers = {}) => {
  try {
    if (body) {
      body = JSON.stringify(body);
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, { method, body, headers });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Что-то пошло не так');
    }

    return data;
  } catch (e) {
    console.log('request catch', e.message);
    throw e;
  }
};

const Auth = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log('auth', data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      console.log('auth', data);

      localStorage.setItem(
        'userData',
        JSON.stringify({ userId: data.userId, token: data.token })
      );
    } catch (e) {}
  };

  const logaut = () => {
    localStorage.removeItem('userData');
  }

  return (
    <>
      <h1>Авторизация</h1>
      <input
        id='email'
        type='text'
        placeholder='введите логин'
        name='email'
        onChange={changeHandler}
      />
      <label htmlFor='email'>Email</label>
      <input
        id='password'
        type='password'
        placeholder='введите пароль'
        name='password'
        onChange={changeHandler}
      />
      <label htmlFor='password'>Password</label>
      <button onClick={loginHandler}>Войти</button>
      <button onClick={registerHandler}>Регистрация</button>
    </>
  );
};

export default Auth;
