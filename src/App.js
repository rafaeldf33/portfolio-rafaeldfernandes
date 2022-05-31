import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (

    <div className="App">
      <Intro nome="Seu nome" cargo1="Analista de Sistema"/>
      <About />      
    </div>
  );
}

export default App;