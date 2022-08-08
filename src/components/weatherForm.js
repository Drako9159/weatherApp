import { useState } from "react";
import styles from "./weatherForm.module.css"

export default function WeatherForm({onChangeCity}) {
  const [city, setCity] = useState("");
  
  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    onChangeCity(city)

  }
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" placeholder="Consulta el clima" onChange={onChange} className={styles.input}>
    
      </input>
    </form>
  );
}
