import React from "react";
import Header from "../Components/Header";
import { axiosRequest } from "../Components/Axios.js";
import { useState } from "react";

function NewBeer() {
  

  const initValue = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: '',
    contributed_by: "",
  };
  const [newBeerState, setNewBeersState] = useState(initValue);
  const [messageState, setMessageState] = useState(false); 

  const submithandler = (e) => {
    e.preventDefault();
    axiosRequest.postNewBeer(newBeerState).then((res) => console.log(res));
    setNewBeersState(initValue);
    setMessageState(true); 
  };

  const onChangHandler = (e) => {
    setNewBeersState((prevState) => {
      let x =
        e.target.name === "attenuation_level"
          ? +e.target.value
          : e.target.value;
      return { ...prevState, [e.target.name]: x };
    });
  };

  return (
    <>
      <Header />
     { !messageState && <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={submithandler}
      >
        <label>
          Name
          <input
            value={newBeerState.name}
            name="name"
            type="text"
            onChange={onChangHandler}
          />
        </label>
        <label>
          TagLine
          <input
            name="tagline"
            type="text"
            onChange={onChangHandler}
            value={newBeerState.tagline}
          />
        </label>
        <label>
          Description
          <textarea
            value={newBeerState.description}
            name="description"
            id=""
            cols="30"
            rows="10"
            onChange={onChangHandler}
          ></textarea>
        </label>

        <label>
          FirstBrewed
          <input
            value={newBeerState.first_brewed}
            name="first_brewed"
            type="text"
            onChange={onChangHandler}
          />
        </label>
        <label>
          BrewersTips
          <input
            name="brewers_tips"
            type="text"
            onChange={onChangHandler}
            value={newBeerState.brewers_tips}
          />
        </label>
        <label>
          AttentionLevel
          <input
            name="attenuation_level"
            type="number"
            onChange={onChangHandler}
            value={newBeerState.attenuation_level}
          />
        </label>
        <label>
          ContributedBy
          <input
            value={newBeerState.contributed_by}
            name="contributed_by"
            type="text"
            onChange={onChangHandler}
          />
        </label>
        <button type="submit">Create !</button>
      </form>}
      {messageState && <h1>"Beer added !"</h1>}
    </>
  );
}

export default NewBeer;
