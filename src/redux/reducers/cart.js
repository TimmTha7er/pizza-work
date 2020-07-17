const changePizzasCount = (items, id, count) => {
  // находим индекс элемента
  const idx = items.findIndex((el) => el.cartId === id);
  const oldItem = items[idx];

  // new item
  const newItem = { ...oldItem, count: oldItem.count + count };

  // создаем новый массив, заменяя элемент
  const newList = [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];

  return { newList, oldItem };
};

const removedPizzaFromCart = (items, id) => {
  // находим индекс элемента
  const idx = items.findIndex((el) => el.cartId === id);

  // находим элемент
  const removedItem = items[idx];

  // создаем новый массив, удаляя ненужный элемент
  const newList = [...items.slice(0, idx), ...items.slice(idx + 1)];

  return { newList, removedItem };
};

const initialState = {
  cartItems: [],
  orderTotal: {
    price: 0,
    count: 0,
  },
};

const cartReducer = (state = initialState, action) => {
  if (action.type === 'PIZZA_ADDED_TO_CART') {
    // получаем пиццу и выбранную основу и размер
    const {
      pizza,
      activeBase: { activeBase },
      activeSize: { activeSize },
    } = action.payload;

    const base = pizza.bases[activeBase].name;
    const size = pizza.sizes[activeSize].name;

    // проверяем есть ли такая пицца в корзине
    const isInCart = state.cartItems.find((item) => {
      return (
        item.pizzaId === pizza.id && item.base === base && item.size === size
      );
    });

    // если такая пицца уже есть, то просто увеличиваем кол-во
    if (isInCart) {
      const { newList, oldItem } = changePizzasCount(
        state.cartItems,
        isInCart.cartId,
        +1
      );

      return {
        cartItems: newList,
        orderTotal: {
          price: state.orderTotal.price + oldItem.price,
          count: state.orderTotal.count + 1,
        },
      };
    }

    // если такой пиццы  нет
    const newItem = {
      pizzaId: pizza.id,
      cartId: state.cartItems.length,
      imageUrl: pizza.imageUrl,
      name: pizza.name,
      base: base,
      size: size,
      price: pizza.price,
      count: 1,
    };

    return {
      cartItems: [...state.cartItems, newItem],
      orderTotal: {
        price: state.orderTotal.price + newItem.price,
        count: state.orderTotal.count + 1,
      },
    };
  }

  if (action.type === 'PIZZA_REMOVED_FROM_CART') {
    const cartId = action.payload;
    const { newList, removedItem } = removedPizzaFromCart(
      state.cartItems,
      cartId
    );

    return {
      ...state,
      cartItems: newList,
      orderTotal: {
        price: state.orderTotal.price - removedItem.price * removedItem.count,
        count: state.orderTotal.count - removedItem.count,
      },
    };
  }

  if (action.type === 'ALL_PIZZAS_REMOVED_FROM_CART') {
    return {
      cartItems: [],
      orderTotal: {
        price: 0,
        count: 0,
      },
    };
  }

  if (action.type === 'PIZZA_INCREASE') {
    const cartId = action.payload;
    const { newList, oldItem } = changePizzasCount(state.cartItems, cartId, +1);

    return {
      cartItems: newList,
      orderTotal: {
        price: state.orderTotal.price + oldItem.price,
        count: state.orderTotal.count + 1,
      },
    };
  }

  if (action.type === 'PIZZA_DECREASE') {
    const cartId = action.payload;
    const { newList, oldItem } = changePizzasCount(state.cartItems, cartId, -1);

    if (oldItem.count === 1) {
      return state;
    }

    return {
      cartItems: newList,
      orderTotal: {
        price: state.orderTotal.price - oldItem.price,
        count: state.orderTotal.count - 1,
      },
    };
  }

  return state;
};

export default cartReducer;
