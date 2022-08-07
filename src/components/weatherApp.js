import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
    //1.- Cuando se carga el componente se ejecuta el código
    //2.- Cada que se renderiza algo
    //3.- Cuando se destruye el componente
  }, []);
  //Arreglo que define las veces que se repite
  async function loadInfo(city = "london") {
    //por defecto london
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      setWeather(json);
      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>{weather?.current.temp_c}</div>
    </div>
  );
}
