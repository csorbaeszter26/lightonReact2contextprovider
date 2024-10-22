import logo from './logo.svg';
import './App.css';
import Jatekter from './lighton/Jatekter';
import { kattContext } from './context/kattContext';
import { useContext } from 'react';

function App() {

  const {lista}=useContext(kattContext)

  return (
    <div className="App">
      <header className="App-header">LightOnReact2</header>
      <article>
        <h2>Ez a lighton</h2>
        <Jatekter lista={lista}/>
      </article>
      <footer>Csorba Eszter</footer>
    </div>
  );
}

export default App;
