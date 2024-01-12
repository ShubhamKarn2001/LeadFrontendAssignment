// App.js
import React, { useState, useEffect } from "react";
import { fetchData } from "./utils/api";
import KanbanBoard from "./Components/KanbanBoard";
import "./App.css";
import { MdOutlineDisplaySettings } from "react-icons/md";

const App = () => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {}
    };

    fetchInitialData();
  }, []);

  return (
    <div className="app">
      <div>
        <select onClick={() => setShow(!show)}>
          <option value="Display">🏠 Display</option>
        </select>
      </div>
      {data ? <KanbanBoard data={data} show={show} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
