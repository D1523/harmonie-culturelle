import React from 'react'
import "./Home.scss"
const Home = () => {
  return (
    <div className="home-bgImg-container">
      <main className="home">
        <h2>Hi! My Name Is</h2>
        <h1 className="home__name">
          Wednesday <span className="home__name--last">Addams</span>
        </h1>
        <h2>Vivons bien, Vivons ensemble !

        Vivons bien, vivons ensemble !

La Plateforme Association Harmonie 
Culturelle vous invite dans une communauté dynamique 
basée sur les principes du dialogue et du Vivre Ensemble.
Née de l'initiative de citoyens passionnés, 
notre association s'engage à créer un espace ouvert 
où chacun peut contribuer à construire une société plus
 harmonieuse.</h2>
      </main>
    </div>
  );
}

export default Home