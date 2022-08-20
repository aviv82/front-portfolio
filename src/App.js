import "./App.css";

import { useEffect, useState } from "react";
import { get } from "./api/get";

function App() {
  const [works, setWorks] = useState([]);

  const worksInit = async () => {
    const workPromise = await get("works?populate=media");
    setWorks(workPromise);
  };

  useEffect(() => {
    worksInit();
  }, []);

  if (works.length !== 0) {
    console.log("works", works.data);
  }

  return (
    <div className="App">
      <h1 className="test">aviv</h1>
    </div>
  );
}

export default App;
