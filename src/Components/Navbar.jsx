import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/global.context';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><button onClick={toggleTheme}>Cambiar Tema</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;