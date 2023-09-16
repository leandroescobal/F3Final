import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    
    const existingFavs = JSON.parse(localStorage.getItem("favoriteDentists")) || [];

    
    const isAlreadyFav = existingFavs.some((dentist) => dentist.id === id);

    if (!isAlreadyFav) {
      
      const newFavList = [...existingFavs, { name, username, id }];
      localStorage.setItem("favoriteDentists", JSON.stringify(newFavList));
      alert("Dentista agregado a favoritos");
    } else {
      
      alert("Este dentista ya está en tus favoritos");
    }
  };

  return (
    <div className="card">
      <p>{name}</p>
      <p>{username}</p>
      <p>{id}</p>
     <Link to={`/dentist/${id}`}>Ver detalles</Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;