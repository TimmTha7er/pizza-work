const initialState = {
  cartItems: [],
  orderTotal: {
    price: 0,
    count: 0,
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PIZZA_ADDED_TO_CART':
      // получаем id выбранной пиццы
			const pizzaId = action.payload;
			
			console.log('state', state)

      // находим выбранную пиццу
      const pizza = state.pizzas.find((pizza) => pizza.id === pizzaId);

      // находим выбранную основу
      const base = state.activeBases.find((base) => base.pizzaId === pizzaId)
        .activeBase;
      // находим выбранный размер
      const size = state.activeSizes.find((size) => size.pizzaId === pizzaId)
        .activeSize;

      console.log(base, size);

      // проверяем есть ли такая пицца в корзине
      // const isInCart = state.cartItems.some((item) => {
      //   return (
      //     item.pizzaId === pizzaId &&
      //     item.base === state.activeBases[0] &&
      //     item.size === state.activeSizes[0]
      //   );
      // });

      // если такая пицца уже есть, то просто увеличиваем кол-во

      const newItem = {
        pizzaId: pizzaId,
        cartId: state.cartItems.length,

        imageUrl: pizza.imageUrl,
        name: pizza.name,

        // ???
        base: pizza.bases[pizzaId].name,
        size: pizza.sizes[pizzaId].name,

        price: pizza.price,
        count: 1,
      };

      console.log(newItem);

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
        orderTotal: {
          price: state.orderTotal.price + newItem.price,
          count: state.orderTotal.count + 1,
        },
      };
    // case 'PIZZA_REMOVED_FROM_CART':
    //   break;
    case 'ALL_PIZZAS_REMOVED_FROM_CART':
      return {
        ...state,
        cartItems: [],
        orderTotal: {
          price: 0,
          count: 0,
        },
      };

    default:
      return state;
  }
};

export default cartReducer;
