const changePizzasCount = (items, pizzaId, count) => {
  // находим индекс элемента
  const idx = items.findIndex((el) => el.pizzaId === pizzaId);
  const oldItem = items[idx];
  // new item
  const newItem = { ...oldItem, count: oldItem.count + 1 };

  // создаем новый массив, удаляя ненужный элемент
  const newList = [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];

  return newList;
};

const initialState = {
  cartItems: [],
  orderTotal: {
    price: 0,
    count: 0,
  },
};

const cartReducer = (state = initialState, action, fullState) => {
  switch (action.type) {
    case 'PIZZA_ADDED_TO_CART':
      // получаем id выбранной пиццы
      const { pizzaId, activeBase, activeSize } = action.payload;

      // находим выбранную пиццу
      const pizza = fullState.data.data.pizzas.find(
        (pizza) => pizza.id === pizzaId
      );

      // находим выбранную основу
      const base = fullState.pizzasList.activeBases.find(
        (base) => base.pizzaId === pizzaId
      ).activeBase;
      // находим выбранный размер
      const size = fullState.pizzasList.activeSizes.find(
        (size) => size.pizzaId === pizzaId
      ).activeSize;

      console.log('base', base);
      console.log('size', size);

      // проверяем есть ли такая пицца в корзине
      const isInCart = state.cartItems.some((item) => {
        return (
          item.pizzaId === pizzaId &&
          item.base === pizza.bases[base].name &&
          item.size === pizza.sizes[size].name
        );
      });

      // если такая пицца уже есть, то просто увеличиваем кол-во
      if (isInCart) {
        console.log('такая пицца уже есть!');

        // находим индекс элемента
        const idx = state.cartItems.findIndex((el) => el.pizzaId === pizzaId);
        const oldItem = state.cartItems[idx];
        // new item
        const newItem = { ...oldItem, count: oldItem.count + 1 };

        // создаем новый массив, удаляя ненужный элемент
        const newList = [
          ...state.cartItems.slice(0, idx),
          newItem,
          ...state.cartItems.slice(idx + 1),
        ];

        return {
          cartItems: newList,
          orderTotal: {
            price: state.orderTotal.price + newItem.price,
            count: state.orderTotal.count + 1,
          },
        };
      } else {
        const newItem = {
          pizzaId: pizzaId,
          cartId: fullState.cart.cartItems.length,

          imageUrl: pizza.imageUrl,
          name: pizza.name,

          // ???
          base: pizza.bases[base].name,
          size: pizza.sizes[size].name,

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

    case 'PIZZA_REMOVED_FROM_CART':
      const cartId = action.payload;
      // находим индекс элемента
      const idx = state.cartItems.findIndex((el) => el.cartId === cartId);

      // находим элемент
      const removedItem = state.cartItems[idx];

      // создаем новый массив, удаляя ненужный элемент
      const newList = [
        ...state.cartItems.slice(0, idx),
        ...state.cartItems.slice(idx + 1),
      ];

      return {
        ...state,
        cartItems: newList,
        orderTotal: {
          price: state.orderTotal.price - removedItem.price * removedItem.count,
          count: state.orderTotal.count - removedItem.count,
        },
      };
    case 'ALL_PIZZAS_REMOVED_FROM_CART':
      return {
        cartItems: [],
        orderTotal: {
          price: 0,
          count: 0,
        },
      };

    case 'PIZZA_INCREASE':
      const cartId2 = action.payload;
      // находим индекс элемента
      const idx2 = state.cartItems.findIndex((el) => el.cartId === cartId2);
      const oldItem = state.cartItems[idx2];
      // new item
      const newItem = { ...oldItem, count: oldItem.count + 1 };

      // создаем новый массив, удаляя ненужный элемент
      const newList2 = [
        ...state.cartItems.slice(0, idx2),
        newItem,
        ...state.cartItems.slice(idx2 + 1),
      ];

      return {
        cartItems: newList2,
        orderTotal: {
          price: state.orderTotal.price + newItem.price,
          count: state.orderTotal.count + 1,
        },
      };

    case 'PIZZA_DECREASE':
      const cartId3 = action.payload;
      // находим индекс элемента
      const idx3 = state.cartItems.findIndex((el) => el.cartId === cartId3);
      const oldItem3 = state.cartItems[idx3];

      if (oldItem3.count === 1) {
        return state;
      }

      // new item
      const newItem3 = { ...oldItem3, count: oldItem3.count - 1 };

      // создаем новый массив, удаляя ненужный элемент
      const newList3 = [
        ...state.cartItems.slice(0, idx3),
        newItem3,
        ...state.cartItems.slice(idx3 + 1),
      ];

      return {
        cartItems: newList3,
        orderTotal: {
          price: state.orderTotal.price - newItem3.price,
          count: state.orderTotal.count - 1,
        },
      };

    default:
      return state;
  }
};

export default cartReducer;
