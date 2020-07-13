export const initialActiveBases = (data) => {
  return {
    type: 'INITIAL_ACTIVE_BASES',
    payload: data,
  };
};

export const initialActiveSizes = (data) => {
  return {
    type: 'INITIAL_ACTIVE_SIZES',
    payload: data,
  };
};

export const setActiveBase = (pizzaId, index) => {
  return {
    type: 'SET_ACTIVE_BASE',
    payload: { pizzaId, index },
  };
};

export const setActiveSize = (pizzaId, index) => {
  return {
    type: 'SET_ACTIVE_SIZE',
    payload: { pizzaId, index },
  };
};
