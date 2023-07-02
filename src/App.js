import { useEffect, useState } from "react";

const App = () => {

  const [ countries, setCountries] = useState(null)


  const getData = async() => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const json = await response.json()
    setCountries(json)
  }

  useEffect(() => getData, [])

  console.log(countries)
  return (
    <div>
      {countries?.map(country => <h1>{country.name.common}</h1>)}
    </div>
  );
}

export default App;