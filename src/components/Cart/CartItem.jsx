import React from 'react';
import { connect } from 'react-redux';

import {
  pizzaRemovedFromCart,
  pizzaIncrease,
  pizzaDecrease,
} from '../../redux/actions';

const CartItem = ({ pizza, onIncrease, onDecrease, onDelete }) => {
  const { cartId, imageUrl, name, base, size, price, count } = pizza;

  return (
    <div className='shopping-list__item'>
      <div className='shopping-list__item-descr'>
        <div className='shopping-list__item-img-wrap'>
          <img className='shopping-list__item-img' src={imageUrl} alt='pizza' />
        </div>
        <div className='shopping-list__item-info'>
          <h3 className='shopping-list__item-name'>{name}</h3>
          <span className='shopping-list__item-base'>{base} тесто, </span>
          <span className='shopping-list__item-size'>{size} см.</span>
        </div>
      </div>
      <div className='shopping-list__btns-block'>
        <div
          onClick={() => onDecrease(cartId)}
          className='shopping-list__btn-minus icon-minus'
        ></div>
        <div className='shopping-list__item-count'>{count}</div>
        <div
          onClick={() => onIncrease(cartId)}
          className='shopping-list__btn-add icon-plus'
        ></div>
      </div>
      <div className='shopping-list__item-price icon-rouble'>
        {price * count}
      </div>
      <div
        onClick={() => onDelete(cartId)}
        className='shopping-list__item-delete icon-cancel'
      ></div>
    </div>
  );
};

// const mapStateToProps = ({pizzas}) => {
//   return {

//   }
// }

const mapDispatchToProps = {
  // onIncrease: (cartId) => () => {
  //   console.log('+', cartId);
  // },
  // onDecrease: (cartId) => () => {
  //   console.log('-', cartId);
  // },
  onDecrease: pizzaDecrease,
  onIncrease: pizzaIncrease,
  onDelete: pizzaRemovedFromCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
