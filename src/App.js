import "./App.css";

import { useEffect, useState } from "react";
import { get } from "./api/get";
import { WorkDisplay } from "./component/WorkDisplay";

function App() {
  const [works, setWorks] = useState([]);

  const worksInit = async () => {
    const workPromise = await get("/api/works?populate=media");
    setWorks(workPromise);
  };

  useEffect(() => {
    worksInit();
  }, []);

  /*
  if (works.length !== 0) {
    console.log("fetch works", works.data);
  }
*/

  return (
    <div className="app">
      <h1 className="head">Aviv Dror</h1>
      {works.length === 0 ? (
        <h2 className="loader">Loading...</h2>
      ) : (
        <WorkDisplay works={works.data} />
      )}
    </div>
  );
}

export default App;
