import { useState } from "react";
import "./styles.css";

export default function App() {
  const [toggle, settoggle] = useState(true);

  function displayText() {
    settoggle((prevtoggle) => !prevtoggle);
  }
  return (
    <div className="App">
      <button className="button" onClick={displayText}>
        Button
      </button>
      {/* <p>{toggle ? "" : "welcome"}</p> */}
      {!toggle && <p>welcome</p>}
    </div>
  );
}
