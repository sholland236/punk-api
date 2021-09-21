import './App.scss';

import NavBar from "./components/NavBar/NavBar";
import Main from "./containers/Main/Main";

import {useState, useEffect} from "react";

function App() {
  // two api arrays so dont need to call each time
  const [beers, setBeers] = useState("");
  const [beersToRender, setBeersToRender] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [highAlcohol, setHighAlcohol] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [highAcidity, setHighAcidity] = useState(false);
  
  const getBeers = () => {
    let searchedBeer = "https://api.punkapi.com/v2/beers";
    // if (searchTerm) {
    //   searchedBeer = searchedBeer + "?beer_name=" + searchTerm.split(' ').join('_')
    // } 
    // if (highAlcohol) {
    //   searchedBeer += "?abv_gt=6";
    // }
    // if (classicRange) {
    //   searchedBeer += "?brewed_before=2010"
    // }
    fetch(searchedBeer)
    .then(response => response.json())
    .then(jsonResponse => {
      setBeers(jsonResponse)
      setBeersToRender(jsonResponse)
    })
    .catch(error => console.log(error))
  }

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    const searchedArray = beers.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm)
    });
    setBeersToRender(searchedArray);
  }

  const toggleAbv = () => {
    setHighAlcohol(!highAlcohol);
    const highAbvArray = beers.filter(beer => {
      return beer.abv > 6.0;
    });
    setBeersToRender(highAbvArray);
  }

  const toggleClassic = () => {
    setClassicRange(!classicRange);
    const classicArray = beers.filter(beer => {
      const beerString = beer.first_brewed;
      let year = beerString.substring(beerString.length-4);
      year = parseInt(year);
      return year < 2010;
    });
    setBeersToRender(classicArray);
  }

  const toggleAcidity = () => {
    setHighAcidity(!highAcidity);
    const lowPhArray = beers.filter(beer => {
      return beer.ph < 4.0;
    });
    setBeersToRender(lowPhArray);
  }

  useEffect(() => {
    getBeers()
  }, []);

  return (
    <div className="App">
      <div className="nav-container">
        <NavBar 
          searchTerm={searchTerm} 
          handleInput={handleInput}
          toggleAbv={toggleAbv}
          toggleClassic={toggleClassic}
          toggleAcidity={toggleAcidity}
        />
      </div>
      <div className="content-container">
        {beersToRender && <Main beers={beersToRender} />}
      </div>
    </div>
  );
}

export default App;