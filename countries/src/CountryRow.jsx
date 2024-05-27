import { useState } from "react";
import CountryDetails from "./CountryDetails";
const CountryRow = ({ index, c }) => {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  if (!toggleDisplay) {
    return (
      <li key={index}>
        {c.name.common}
        <button onClick={() => setToggleDisplay(!toggleDisplay)}>show</button>
      </li>
    );
  } else {
    return (
      <div>
        {" "}
        <CountryDetails countryInfo={c} />
        <button onClick={() => setToggleDisplay(!toggleDisplay)}>hide</button>
      </div>
    );
  }
};

export default CountryRow;
