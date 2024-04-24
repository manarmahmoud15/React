import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesPaths from './Routes/RoutesPaths';
import { CounterContext } from './Context/Counter';
import { useState } from 'react';

function App() {
  const [counter , setCounter] = useState (0);
  return (
    <BrowserRouter>
    <CounterContext.Provider  value={{counter , setCounter}}>
      <RoutesPaths/>
    </CounterContext.Provider>
    </BrowserRouter>
  );
}

export default App;
