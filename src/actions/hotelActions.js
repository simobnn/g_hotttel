
  export const updateHotel = (updatedHotel) => ({
    type: 'UPDATE_HOTEL',
    payload: updatedHotel,
  });
  
  export const deleteHotel = (hotelId) => ({
    type: 'DELETE_HOTEL',
    payload: hotelId,
  });
  export const addHotel = (newHotel) => ({
    type: 'ADD_HOTEL',
    payload: newHotel,
  });
  