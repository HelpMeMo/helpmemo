import './App.css';
import Card from './components/Card';
import EmileDurkhein from "./assets/EmileDurkheim.png";
import questio_mark_sociologia from "./assets/questio_mark_sociologia.png";

import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Hst from "./pages/Hst";
import Initial from "./pages/Initial";
import Math from "./pages/Math";
import Sociology from "./pages/Sociology";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Initial />} />
          <Route path="/about" element={<About />} />
          <Route path="/hst" element={<Hst />} />
          <Route path="/math" element={<Math />} />
          <Route path="/sociology" element={<Sociology />} />
        </Routes>
        <h1 className="text-3xl w-64 bg-slate-400 text-center">Testes</h1>
        <Card content={<img className="Questio_mark_sociologia" src={questio_mark_sociologia} alt="question mark sociologia" />} />
        <Card content={<img className="Questio_mark_sociologia" src={EmileDurkhein} alt="EmileDurkhein" />} />



      </div>
    </Router>

  );
}

export default App;