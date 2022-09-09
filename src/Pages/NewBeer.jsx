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
    attenuation_level: 0,
    contributed_by: "",
  };
  const [newBeerState, setNewBeersState] = useState(initValue);

  const submithandler = (e) => {
    e.preventDefault();
    axiosRequest.postNewBeer(newBeerState).then((res) => console.log(res));
    
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
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={submithandler}
      >
        <label>
          Name
          <input name="name" type="text" onChange={onChangHandler} />
        </label>
        <label>
          TagLine
          <input name="tagline" type="text" onChange={onChangHandler} />
        </label>
        <label>
          Description
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            onChange={onChangHandler}
          ></textarea>
        </label>

        <label>
          FirstBrewed
          <input name="first_brewed" type="text" onChange={onChangHandler} />
        </label>
        <label>
          BrewersTips
          <input name="brewers_tips" type="text" onChange={onChangHandler} />
        </label>
        <label>
          AttentionLevel
          <input
            name="attenuation_level"
            type="number"
            onChange={onChangHandler}
          />
        </label>
        <label>
          ContributedBy
          <input name="contributed_by" type="text" onChange={onChangHandler} />
        </label>
        <button type="submit">Create !</button>
      </form>
    </>
  );
}

export default NewBeer;
