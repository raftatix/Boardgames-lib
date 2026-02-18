import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("/api/health/")
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("Error connecting to backend");
      });
  }, []);

  return (
    <div className="App">
      <h1>Boardgames App</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}

export default App;
