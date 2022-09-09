import React from "react";
import { useState,useEffect } from "react";
import ReactContext from "../Components/Context.js";
import Header from "../Components/Header";
import {axiosRequest} from '../Components/Axios'


function RandomBeer() {
  const [randomState, setRandomState] = useState(); 

useEffect(() => {
  axiosRequest.getRandomBeer().then((res) => {
    return setRandomState(res.data);
  });
}, []);

if(!randomState){return (<h1>"We are Loading</h1>)}


  return (
    <div>
      <Header />
      <img
        src={randomState.image_url}
        alt="picRandom"
        style={{ width: "2rem", marginTop: "3rem" }}
      />
      <h2>{randomState.name}</h2>
      <p>{randomState.tagline}</p>
      <p>
        <strong>Contributed By:</strong>
        {randomState.contributed_by}
      </p>
    </div>
  );
}

export default RandomBeer;
