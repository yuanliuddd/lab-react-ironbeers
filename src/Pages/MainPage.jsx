import React from "react";
import allBeersImage from "../assets/beers.png"
import newBeerImage from "../assets/new-beer.png"
import randomBeerImg from '../assets/random-beer.png'
import{Link}from 'react-router-dom'


function MainPage() {
  return (
    <div>
      <section>
        <img src={allBeersImage} alt="all" />
        <h1>
          <Link to="/beers">All Beers</Link>
        </h1>
      </section>
      <section>
        <img src={newBeerImage} alt="newBeer" />
        <h1>
          <Link to="/random">Random Beer</Link>
        </h1>
      </section>
      <section>
        <img src={randomBeerImg} alt="newBeer" />
        <h1>
          <Link to="/new-beer">New Beer</Link>
        </h1>
      </section>
    </div>
  );
}

export default MainPage;
