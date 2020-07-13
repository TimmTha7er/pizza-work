import React from 'react';
import { PizzaBaseList, PizzaSizeList, PizzaButton } from '../../components';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pizzaAddedToCart } from '../../redux/actions';

const Pizza = ({ pizza, pizzaAddedToCart, activeBases, activeSizes }) => {
  const {
    id,
    imageUrl,
    name,
    bases,
    sizes,
    price,
  } = pizza;

  console.log('activeBases', activeBases)
  console.log('activeSizes', activeSizes)

  const activeBase = activeBases.find((el) => el.pizzaId === id);
  const activeSize = activeSizes.find((el) => el.pizzaId === id);

  return (
    <div className='pizza content__pizza'>
      <div className='pizza__img-wrap'>
        <img className='pizza__img' src={imageUrl} alt='pizza' />
      </div>
      <div className='pizza__name'>{name}</div>
      <div className='pizza__options'>
        <PizzaBaseList bases={bases} initBase={activeBase} pizzaId={id} />
        <PizzaSizeList sizes={sizes} initSize={activeSize} pizzaId={id} />
      </div>
      <div className='pizza__bot-line'>
        <div className='pizza__price icon-rouble'>{price}</div>
        <PizzaButton
          onBtnClick={() => pizzaAddedToCart(id, activeBase, activeSize)}
          // count={count}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (
  { pizzasList: { activeBases, activeSizes } },
  // { pizza: { id } }

  ) => {
    console.log('activeBases', activeBases)
    console.log('activeSizes', activeSizes)
    // console.log('id', id)
    // console.log('activeBases', activeBases.find((el) => el.pizzaId === id));
    // console.log('activeSizes', activeSizes.find((el) => el.pizzaId === id));

    // const activeBase = activeBases.find((el) => el.pizzaId === id);
    // const activeSize = activeSizes.find((el) => el.pizzaId === id);
    
    return {
     activeBases,
     activeSizes,
  };
};

const mapDispatchToProps = {
  pizzaAddedToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
