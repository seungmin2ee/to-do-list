import "./App.css";
import AddList from "./components/AddList";
import Lists from "./components/Lists";
import Loading from "./components/Loading";
import useFetch from "./util/useFetch";

function App() {
  const [isData, isPending, reRendering] = useFetch('http://localhost:3001/lists');

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <main>
        <section className="main_container">
          <AddList reRendering={reRendering} />
          <div className="list_container">
            {isPending ? <Loading />
            : isData.length !== 0 ?
            <Lists isData={isData} reRendering={reRendering}/>
            : <div className="blank">할 일을 추가해보세요!</div>
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
