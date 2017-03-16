import React, {Component } from 'react';
import './partenaires.css';
import img1 from './image/kickatarter.png'
import img2 from './image/parisbas.png'
import img3 from './image/societe.png'
import img4 from './image/ullule_480.png'
class Partenaires extends Component {
 render() {
    return (
      <div className"kickass-h2">
        <h1>Partenaires</h1>
            <partenaires className="kickass-logo">
            <img className="profil1"
            src="image/societe.png" alt="">

            <img className="profil2"
             src="image/ullule_480.png" alt="">


             <img className="profil3"
             src="image/kickstarter.png" alt="">

             <img className="profil4"
              src="image/parisbas.png" alt="">

          </partenaires>


            </div>
    );
  }
}
export default Partenaires;
