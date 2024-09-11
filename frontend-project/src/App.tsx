import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State to hold the data from the backend
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Sample Project</h1>
      <div className="card">
        {loading ? <p>Loading data...</p> : <p>Backend says: {data}</p>}
      </div>
      <div>
        {import.meta.env.ARG_VAR || "Variable Not Provided ,Please Provide"}
      </div>
    </div>
  );
}

export default App;
