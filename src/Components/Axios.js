import axios from "axios";

class AxiosClass {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ih-beers-api2.herokuapp.com/beers",
      timeout: 10000,
    });

    this.getAllBeers = () => {
      return this.api.get();
    };

    this.getSpecificBeer = (id) => {
      return this.api.get(`/${id}`);
    };

    this.getRandomBeer = () => {
      return this.api.get(`/random`);
    };

    this.getSearchedBeer = (query) => {
      return this.api.get(`/search?q=${query}`);
    };

    this.postNewBeer = (beerInfo) => {
      return this.api.post(`/new`, beerInfo);
    };
  }
}

export const axiosRequest = new AxiosClass();
