import "./App.css";
import Classcounter from "./Components/Classcounter";
import Functioncounter from "./Components/Functioncounter";

function App() {
  return (
    <div className="App">
      <h1 className="mainheading">Assignment-1 Counter Application</h1>
      <div className="counters">
        <Classcounter />
        <Functioncounter />
      </div>
    </div>
  );
}

export default App;
