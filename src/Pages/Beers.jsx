import React from "react";
import { useContext,useRef ,useState} from "react";
import  ReactContext  from "../Components/Context.js";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import {axiosRequest} from '../Components/Axios'


function Beers() {
  const appState = useContext(ReactContext);
  const searhRef = useRef(); 
  const [beersState, setBeersState] = useState(appState); 

  if (!beersState) {
    return <h1>"we are loading "</h1>;
  }

  const beerItem = beersState.map((ele) => {
    return (
      <li key={ele._id}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
            marginTop: "2rem",
          }}
        >
          <Link to={`/beers/${ele._id}`} style={{ unvisited: "black" }}>
            <img
              style={{ width: "2rem", marginTop: "3rem" }}
              src={ele.image_url}
              alt="beer"
            />
            <h2>{ele.name}</h2>
          </Link>
          <p>{ele.tagline}</p>
          <p>
            <strong>Contributed By:</strong>
            {ele.contributed_by}
          </p>
        </div>
      </li>
    );
  });

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(searhRef.current.value);
     axiosRequest
       .getSearchedBeer(searhRef.current.value)
       .then((res) => {setBeersState(res.data)}); 
}


  return (
    <div>
      <Header />
      <form onSubmit={submitHandler}>
        <label htmlFor="search"></label>
        <input id="search" type="text" ref={searhRef} />
        <button type="submit">Search</button>
      </form>
      <ul style={{ listStyle: "none" }}>{beerItem}</ul>
    </div>
  );
}

export default Beers;
