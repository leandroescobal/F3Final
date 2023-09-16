import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [dentistDetails, setDentistDetails] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentistDetails(data))
      .catch((error) => console.error('Error al obtener los detalles del dentista', error));
  }, [id]);

  return (
    <div className="dentist-detail">
      <h2>Detalles del Dentista</h2>
      {dentistDetails ? (
        <div>
          <p>Nombre: {dentistDetails.name}</p>
          <p>Email: {dentistDetails.email}</p>
          <p>Teléfono: {dentistDetails.phone}</p>
          <p>Sitio web: {dentistDetails.website}</p>
        </div>
      ) : (
        <p>Cargando detalles del dentista...</p>
      )}
    </div>
  );
}

export default Detail;