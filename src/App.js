import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage.jsx";
import { axiosRequest } from "./Components/Axios";
import React, { useEffect, useState } from "react";
import ReactContext from "./Components/Context";
import Beers from "./Pages/Beers";
import RandomBeer from "./Pages/RandomBeer";
import SpecificBeer from "./Pages/SpecificBeer";
import NewBeer from './Pages/NewBeer'

function App() {
  const [appState, setAppState] = useState();

  useEffect(() => {
    axiosRequest.getAllBeers().then((res) => {
      return setAppState(res.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <ReactContext.Provider value={appState}>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<SpecificBeer />} />
            <Route path="/random" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
          </Routes>
        </div>
      </ReactContext.Provider>
    </BrowserRouter>
  );
}

export default App;
