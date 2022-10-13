import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TVShow from './pages/Home';
import Episodes from './pages/Episodes';
import EpisodeDetails from './pages/EpisodeDetails';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TVShow />}></Route>
          <Route path='/:TVShowName' element={<Episodes />}></Route>
          <Route path='/:TVShowName/:EpisodeName' element={<EpisodeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
