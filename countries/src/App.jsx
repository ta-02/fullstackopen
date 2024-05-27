import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CountryDisplay from "./CountryDisplay";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";

const App = () => {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setCountry(value);
    setFilteredData(
      data.filter((d) =>
        d.name.common.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    axios.get(baseUrl + "/api/all").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      find countries <input value={country} onChange={handleCountryChange} />
      <CountryDisplay filteredData={filteredData} />
    </div>
  );
};

export default App;
