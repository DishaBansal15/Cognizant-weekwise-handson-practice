import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './components/CalculteScore';
function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Disha"}
      School={"KIET Group of Institutions"}
      total={284} goal={3}/>
    </div>
  );
}

export default App;
