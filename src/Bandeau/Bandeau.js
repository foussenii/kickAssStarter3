import React, { Component } from 'react';
import './reset.css';
import './Bandeau.css';


class Bandeau extends Component {
  render() {
    return (
      <div className="Bandeau">
        <div className='bandeauImage'>
          <div className='bandeauPresentation'>
            <h3 className='kickass-h3'>Titre du projet</h3>
            <h2 className='kickass-h2'>Description du projet : ce projet est vraiment super génial c'est pour ça qu'on l'a mis en avant</h2>
            <p className='kickass-p'>Plus d'infos...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bandeau;
