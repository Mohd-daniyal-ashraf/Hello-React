import "./App.css";
import Lottery from "./lottry.jsx";

function App() {
  return (
    <>
      <Lottery n={3} winingsum={15} />
      <br />
    </>
  );
}

export default App;
