import React from 'react';

const DeleteHotel = ({ hotelId, onHotelDeleted }) => {
  const handleDeleteHotel = () => {
    onHotelDeleted(hotelId);
  };

  return (
    <div>
      <button onClick={handleDeleteHotel}>Delete Hotel</button>
    </div>
  );
};

export default DeleteHotel;
