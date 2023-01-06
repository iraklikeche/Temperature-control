import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(10);

  function increase() {
    if (count < 30) {
      setCount(count + 1);
    }
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="app-container">
      <div className="temp-display-container">
        <div className={`temp-display ${count >= 15 ? "hot" : "cold"}`}>
          {count}C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}
