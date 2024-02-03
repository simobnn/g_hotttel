import React, { useState } from 'react';

const AddHotel = ({ onHotelAdded }) => {
  const [name, setName] = useState('');

  const handleAddHotel = () => {
    const newHotel = {
      id: Date.now(),
      name,
    };

    onHotelAdded(newHotel);

    setName('');
  };

  return (
    <div>
      <h2>Add Hotel</h2>
      <input
        type="text"
        placeholder="Hotel Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleAddHotel}>Add Hotel</button>
      <handleAddHotel/>
    </div>
  );
};

export default AddHotel;
