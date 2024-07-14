import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const handleChange = () => {

    setDark(!dark)
  }

  return (
    <div className={dark ? "App dark-mode" : "App"}>
      <div className="nav">
        <label className="switch">
          <input 
          type="checkbox" 
          onChange={handleChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
