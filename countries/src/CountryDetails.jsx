const CountryDetails = ({ countryInfo }) => {
  console.log(countryInfo);
  return (
    <div>
      <h1>{countryInfo.name.common}</h1>
      <div>capital: {countryInfo.capital[0]}</div>
      <img src={countryInfo.flags.png} />
    </div>
  );
};
export default CountryDetails;
