import { useState } from "react";
import Snowflake from "./components/Snowflake";
import "./App.css";

function App() {
  const [count, setCount] = useState(100);

  return (
    <div className="App">
      {[...Array(count)].map((e, i) => (
        <Snowflake background={"#d0f0ff"} key={i} />
      ))}
    </div>
  );
}

export default App;
