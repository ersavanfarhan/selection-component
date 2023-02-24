import List from "./components/list";
import Navbar from "./components/navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <List />
      </div>
    </div>
  );
}

export default App;
