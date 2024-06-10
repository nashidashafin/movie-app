import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>

      </Routes>
    </div>
  );
}

export default App;
