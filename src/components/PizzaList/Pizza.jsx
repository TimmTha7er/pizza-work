import React from 'react';
import { PizzaBaseList, PizzaSizeList, PizzaButton } from '../../components';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { pizzaAddedToCart } from '../actions';

const Pizza = ({ pizza, pizzaAddedToCart }) => {
  // const [pizza, setPizza] = useState({
  //   pizzaId: id,
  // });

  const { id, imageUrl, name, bases, sizes, price } = pizza;

  // const onBtnClick = () => {
  //   onAddedToCart(id);
  // };

  // const handleBaseClick = (index) => {
  //   setPizza({
  //     ...pizza,
  //     base: bases[index].name,
  //   });
  // };

  // const handleSizeClick = (index) => {
  //   setPizza({
  //     ...pizza,
  //     size: sizes[index].name,
  //   });
  // };

  return (
    <div className='pizza content__pizza'>
      <div className='pizza__img-wrap'>
        <img className='pizza__img' src={imageUrl} alt='pizza' />
      </div>
      <div className='pizza__name'>{name}</div>
      <div className='pizza__options'>
        <PizzaBaseList bases={bases} />
        <PizzaSizeList sizes={sizes} />
      </div>
      <div className='pizza__bot-line'>
        <div className='pizza__price icon-rouble'>{price}</div>
        <PizzaButton
          onBtnClick={() => pizzaAddedToCart(id)}
          // count={count}
        />
      </div>
    </div>
  );
};

// const mapStateToProps = () => {};

// const mapDispatchToProps = {
//   pizzaAddedToCart,
// };
export default Pizza;
