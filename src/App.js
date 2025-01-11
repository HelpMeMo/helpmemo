import './App.css';
import Card from './components/Card';
import EmileDurkhein from "./assets/EmileDurkheim.png";
import questio_mark_sociologia from "./assets/questio_mark_sociologia.png";
import FrequencyTableGame from './components/FrequencyTableGame'; // Import do componente que já criei

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl w-64 bg-slate-400 text-center">Testes</h1>
      <Card content={<img className="Questio_mark_sociologia" src={questio_mark_sociologia} alt="question mark sociologia" />} />
      <Card content={<img className="Questio_mark_sociologia" src={EmileDurkhein} alt="EmileDurkhein" />} />
      
      {/* Adicionando o componente FrequencyTableGame */}
      <FrequencyTableGame />
    </div>
  );
}

export default App;