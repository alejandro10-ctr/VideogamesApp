import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import VideogameCreate from './components/VideogameCreate'
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<LandingPage/>}/>
        <Route path = '/home' element={<Home/>}/>
        <Route path = '/videogame' element= {<VideogameCreate/>}/>
        <Route path ='/:id' element={<Detail/>}/>
        <Route path ='/?name=' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
