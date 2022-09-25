import React, { useState } from "react";
import "./App.css";
import ZipSearchField from "./components/ZipSearchField";
import City from "./components/City";

const zipcodeAPI = "https://ctp-zip-api.herokuapp.com/zip/"

function App() {
  const [cityList, setCityList] = useState([])
  
  let cityDisplaySection;
  if(cityList.length > 0){
    cityDisplaySection = cityList.map(city => <City cityInfo={city} />)
  }else{
    cityDisplaySection = <strong>No results found</strong>;
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField setCityList={setCityList} zipcodeAPI={zipcodeAPI} />
        <div>
          {cityDisplaySection}
        </div>
      </div>
    </div>
  );
}

export default App;
