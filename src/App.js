// frontend-app/src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Sesuaikan URL backend Laravel Anda (misal: http://localhost:8000/api/hello)
    // Atau jika sudah dideploy, gunakan URL backend yang sudah online
    fetch("http://localhost:8000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Frontend React</h1>
      <p>{message ? message : "Loading message from backend..."}</p>
    </div>
  );
}

export default App;
