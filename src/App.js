import { useState } from "react";
import "./App.css";
import AddList from "./components/AddList";
import Lists from "./components/Lists";
import data from "./data/data";

function App() {
  const [isData, isDataSet] = useState(data);

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <main>
        <section className="main_container">
          <AddList isData={isData} isDataSet={isDataSet} />
          <div className="list_container">
            {isData.length !== 0 ?
            <Lists isData={isData} isDataSet={isDataSet} />
            : <div className="blank">할 일을 추가해보세요!</div>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
