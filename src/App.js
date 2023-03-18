import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {  BrowserRouter,  Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Pokemones from './views/Pokemones';
import PokemonesId from './views/PokemonesId';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />      
          <Route path="/pokemones/:id" element={<PokemonesId/>} />
          <Route path="/pokemones" element={<Pokemones/>} />
          <Route path="*" element={<NotFound />} />          
        </Routes>      
      </BrowserRouter>    
    </div>   
  );
}

export default App;
