import React, { useState } from 'react';
import EditHotel from './EditHotel';
import DeleteHotel from './DeleteHotel';
import AddHotel from './AddHotel';

const HotelList = () => {
  const [hotels, setHotels] = useState([
    { id: 1, name: ' Hotel Hamza Nadir ' },
    { id: 2, name: ' Hotel Mamora Tanger ' },
    { id: 3, name: ' Riad Joya ' },
    { id: 4, name: ' Hotel Sahrai ' },
    { id: 5, name: ' La Mamounia ' },
    { id: 6, name: ' Four Seasons Hotel Casablanca ' },
    { id: 7, name: ' Incantevole Luxury apprt nel cuore di Casablanca ' },

  ]);

  const [editHotelId, setEditHotelId] = useState(null);

  const handleEditClick = (id) => {
    setEditHotelId(id);
  };

  const handleHotelUpdated = (updatedHotel) => {
    setHotels(prevHotels => prevHotels.map(hotel => (hotel.id === updatedHotel.id ? updatedHotel : hotel)));
    setEditHotelId(null);
  };

  const handleDeleteClick = (id) => {
    setHotels(prevHotels => prevHotels.filter(hotel => hotel.id !== id));
  };

  const handleAddHotel = (newHotel) => {
    setHotels(prevHotels => [...prevHotels, newHotel]);
  };

  return (
    <div>
      <h2>Hotel List</h2>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.id}>
            {editHotelId === hotel.id ? (
              <EditHotel hotel={hotel} onHotelUpdated={handleHotelUpdated} />
            ) : (
              <div>
                {hotel.name}
                <button onClick={() => handleEditClick(hotel.id)}>Edit</button>
                <DeleteHotel hotelId={hotel.id} onHotelDeleted={handleDeleteClick} />
              </div>
            )}
          </li>
        ))}
      </ul>
      <AddHotel onHotelAdded={handleAddHotel} />
    </div>
  );
};

export default HotelList;
