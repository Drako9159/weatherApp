import { useState, useEffect} from "react";
import styles from "./test.module.css";

export default function Test() {
  const [number, setNumber] = useState(0);

  

  function handleClickSuma(e) {
    e.preventDefault();
    setNumber(number + 1);
  }
  function handleClickResta(e) {
    e.preventDefault();
    setNumber(number - 1);
  }
  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setNumber(value);
  }
  return (
    <div className={styles.container}>
      <input type="text" onChange={handleChange} value={number} />
      <div>
        <button onClick={handleClickSuma}>+</button>
        <button onClick={handleClickResta}>-</button>
      </div>
    </div>
  );
}
