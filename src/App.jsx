import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import DentistDetail from './Routes/DentistDetail';
import Favorites from './Routes/Favorites';
import { ContextGlobal } from './Components/utils/global.context'; 

function App() {
  // Obtiene el tema actual del contexto global
  const { theme } = useContext(ContextGlobal);

  return (
    <Router>
      <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/dentist/:id" component={DentistDetail} />
          <Route path="/favs" component={Favorites} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
