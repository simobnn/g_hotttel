import React, { useState } from 'react';

const EditHotel = ({ hotel, onHotelUpdated }) => {
  const [name, setName] = useState(hotel ? hotel.name : '');

  const handleUpdateHotel = () => {
    if (hotel) {
      onHotelUpdated({ ...hotel, name });
    }
  };

  return (
    <div>
      <h2>Edit Hotel</h2>
      <input
        type="text"
        placeholder="Hotel Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleUpdateHotel}>Update Hotel</button>
    </div>
  );
};

export default EditHotel;
