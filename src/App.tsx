import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import EpisodeDetails from './pages/EpisodeDetails';

export const add = (num1: number, num2: number)=> {
  return num1 + num2;
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:TVShowName' element={<Episodes />}></Route>
          <Route path='/:TVShowName/:EpisodeName' element={<EpisodeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
