const initialState = {
  pizzas: [],
  filter: 0,
  loading: true,
  error: null,

  filterCategories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'],
  sortCategories: ['популярности', 'цене', 'алфавиту'],

  activeBases: [],
  activeSizes: [],

  cartItems: [],
  orderTotal: {
    price: 0,
    count: 0,
  },
};

const findActiveElement = (elements) => {
  return elements.findIndex((el) => {
    return el.available === true;
  });
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case 'PIZZAS_REQUESTED':
      return {
        ...state,
        pizzas: [],
        loading: true,
        error: null,
      };

    case 'PIZZAS_LOADED':
      const pizzas = action.payload;

      const activeBases = pizzas.map((pizza) => {
        return {
          pizzaId: pizza.id,
          activeBase: findActiveElement(pizza.bases),
        };
      });

      const activeSizes = pizzas.map((pizza) => {
        return {
          pizzaId: pizza.id,
          activeSize: findActiveElement(pizza.sizes),
        };
      });

      console.log(activeBases);
      console.log(activeSizes);

      return {
        ...state,
        pizzas: action.payload,
        activeBases: activeBases,
        activeSizes: activeSizes,
        loading: false,
        error: null,
      };

    case 'PIZZAS_ERROR':
      return {
        ...state,
        pizzas: [],
        loading: false,
        error: action.payload,
      };

    case 'PIZZA_SORT':
      const category = action.payload;
      const sortedPizzas = [...state.pizzas];

      switch (category) {
        case 'популярности':
          sortedPizzas.sort((a, b) => b.rating - a.rating);
          break;
        case 'цене':
          sortedPizzas.sort((a, b) => b.price - a.price);
          break;
        case 'алфавиту':
          sortedPizzas.sort((a, b) => {
            const x = a.name.toLowerCase();
            const y = b.name.toLowerCase();

            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });
          break;

        default:
          sortedPizzas.sort((a, b) => b.rating - a.rating);
      }

      return {
        ...state,
        pizzas: sortedPizzas,
      };

    case 'PIZZA_FILTER':
      const filter = action.payload;

      return {
        ...state,
        filter: filter,
      };

    case 'PIZZA_ADDED_TO_CART':
      // получаем id выбранной пиццы
      const pizzaId = action.payload;

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

export default reducer;
