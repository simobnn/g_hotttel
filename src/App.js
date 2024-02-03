
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HotelList from './components/HotelList';

import AddHotel from './components/AddHotel';
import EditHotel from './components/EditHotel';
import DeleteHotel from './components/DeleteHotel';

import "./App.css"

const App = () => {
  return (

    <Provider store={store}>
      <Router>
        <div>
          <h1>Hotel Management Dev201</h1>
          <h2>BENATTOUCH / IHFA</h2>

      <h1>Application CRUD pour gérer des hôtels et des chambres</h1>
      
        <ul>
          <li>
            <Link to="/hotels">Voir la liste des hôtels</Link>
          </li>
          
        </ul>
      
         
          <Routes>
         
            <Route path="/hotels" element={<HotelList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
