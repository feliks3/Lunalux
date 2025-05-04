import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BirthInfoPage from './pages/BirthInfoPage';
import ResultPage from './pages/ResultPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/input" element={<BirthInfoPage />}></Route>
          <Route path="/result" element={<ResultPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
