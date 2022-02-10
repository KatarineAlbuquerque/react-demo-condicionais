import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

const App = () => {

  const [numero, setNumero] = useState(0);

  const verificarNumero = (e) => {  
    setNumero(+e.target.value);
  }

  return (
    <div className="App">
      <Card numero={numero} verificarNumero={e => verificarNumero(e)} />   
    </div>
  );
}

export default App;
