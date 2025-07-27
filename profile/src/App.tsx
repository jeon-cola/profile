import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router';

function App() {
  return (
    <div className="App justify-center items-center flex">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
