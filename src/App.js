import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesPaths from './Routes/RoutesPaths';

function App() {
  return (
    <BrowserRouter>
    <RoutesPaths/>
    </BrowserRouter>
  );
}

export default App;
