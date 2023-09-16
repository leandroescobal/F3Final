import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/global.context';
import Card from '../Components/Card';

function Home() {
  const { theme } = useContext(ThemeContext);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDentists(data))
      .catch((error) => console.error('Error al obtener la lista de dentistas', error));
  }, []);

  return (
    <div className={`home ${theme}`}>
      <h1>Lista de Dentistas</h1>
      <div className="dentist-list">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            dentist={dentist}
            showAddToFavsButton={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;