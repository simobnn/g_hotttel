const hotelReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOTEL':
      return [...state, action.payload];

    case 'UPDATE_HOTEL':
      return state.map((hotel) =>
        hotel.id === action.payload.id ? action.payload : hotel
      );

    case 'DELETE_HOTEL':
      return state.filter((hotel) => hotel.id !== action.payload);

    default:
      return state;
  }
};

export default hotelReducer;


