import React from "react";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import ReactContext from "../Components/Context";
import { useParams } from "react-router-dom";
import { axiosRequest } from "../Components/Axios.js";

const SpecificBeer = () => {
  const [SpecificBeerState, setSpecificBeerState] = useState();
  const { id } = useParams();

  useEffect(() => {
    axiosRequest
      .getSpecificBeer(id)
      .then((res) => setSpecificBeerState(res.data));
  }, [id]);

  if (!SpecificBeerState) {
    return <h1>"we are loading "</h1>;
  }
 

  return (
    <>
      <Header />
      <div>
        <img
          src={SpecificBeerState.image_url}
          alt="yourChoice"
          style={{ width: "2rem", marginTop: "3rem" }}
        />
        <h2>{SpecificBeerState.name}</h2>
        <p>{SpecificBeerState.tagline}</p>
        <p>
          <strong>Contributed By:</strong>
          {SpecificBeerState.contributed_by}
        </p>
      </div>
    </>
  );
};

export default SpecificBeer;
