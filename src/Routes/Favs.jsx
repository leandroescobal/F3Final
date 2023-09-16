import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

function Favs() {
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteDentists')) || [];
    setFavoriteDentists(storedFavorites);
  }, []);

  return (
    <div className="favorites">
      <h2>Dentistas Destacados</h2>
      {favoriteDentists.length > 0 ? (
        <div className="dentist-list">
          {favoriteDentists.map((dentist) => (
            <Card
              key={dentist.id}
              dentist={dentist}
              showAddToFavsButton={false}
            />
          ))}
        </div>
      ) : (
        <p>No tienes dentistas destacados.</p>
      )}
    </div>
  );
}

export default Favs;
