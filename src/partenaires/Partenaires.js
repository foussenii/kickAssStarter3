import React, { Component } from 'react';
import './partenaires.css';
import img1 from './kickstarter.png';
import img2 from './parisbas.png';
import img3 from './societe.png';
import img4 from './ullule_480.png';
class Partenaires extends Component {
 render() {
    return (
      <div className="kickass-h2">
      <div class="titre">
          <h1>Partenaires</h1>
      </div>

            <partenaires className="kickass-logo">

            <img className="profil1"
            src={img1}
           alt=""/>

            <img className="profil2"
             src={img2} alt=""/>


             <img className="profil3"
             src={img3} alt=""/>

             <img className="profil4"
              src={img4} alt=""/>

          </partenaires>


            </div>
    );
  }
}
export default Partenaires;
