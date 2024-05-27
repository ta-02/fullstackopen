import CountryDetails from "./CountryDetails";
import CountryRow from "./CountryRow";

const CountryDisplay = ({ filteredData }) => {
  const length = filteredData.length;
  if (length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (length === 1) {
    return <CountryDetails countryInfo={filteredData[0]} />;
  } else if (length == 0) {
    return <div></div>;
  } else {
    return (
      <ul>
        {filteredData.map((c, index) => (
          <CountryRow index={index} c={c} />
        ))}
      </ul>
    );
  }
};

export default CountryDisplay;
