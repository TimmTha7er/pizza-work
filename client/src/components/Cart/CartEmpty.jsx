import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import emptyCartImg from '../../img/cart/empty-cart.png';

const CartEmpty = ({ totalCount }) => {
  if (totalCount > 0) {
    return <Redirect to='/cart' />;
  }

  return (
    <div className='empty-cart page'>
      <div className='container empty-cart__container'>
        <h2 className='empty-cart__title'>Корзина пуста</h2>
        <p className='empty-cart__text'>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br className='empty-cart__br' />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>

        <div className='empty-cart__img-wrap'>
          <img
            src={emptyCartImg}
            alt='your cart is empty'
            className='empty-cart__img'
          />
        </div>
        <Link to='/' className='empty-cart__btn button'>
          Вернуться назад
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  cart: {
    orderTotal: { count },
  },
}) => {
  return {
    totalCount: count,
  };
};

export default connect(mapStateToProps, null)(CartEmpty);
