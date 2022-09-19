import React, { useState } from "react";
import "./App.css";

const zipcodeAPI = "https://ctp-zip-api.herokuapp.com/zip/"

function getInput() {
  return document.querySelector('#zipCodeInput').value
}


function City({cityInfo}) {
  return <div className="border rounded mt-5">
    <div className="bg-light px-3 py-2  border-bottom rounded-top ">{cityInfo['City']}, {cityInfo['State']}</div>
    <ul className="py-3 px-5 pb-2">
      <li>State: {cityInfo.State}</li>
      <li>Location: ({cityInfo['Lat']}, {cityInfo['Long']})</li>
      <li>Population (estimated): {cityInfo['EstimatedPopulation']}</li>
      <li>Total Wages: {cityInfo['TotalWages']}</li>
    </ul>

  </div>;
}

function ZipSearchField({ setCityList }) {
  return <div className="mt-5 ">
    <label for="zipCodeInput">Zip code: </label>
    <br />
    <input className="form-control border rounded" id="zipCodeInput" type="text" placeholder="Enter a zipcode" onChange={
      async () => {
        try {
          const res = await fetch(zipcodeAPI + getInput())
          const data = await res.json()
          setCityList(data)
        } catch (e) {
          setCityList([])
        }
      }
    } />

  </div>;
}

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
        <ZipSearchField setCityList={setCityList} />
        <div>
          {cityDisplaySection}
        </div>
      </div>
    </div>
  );
}

export default App;
