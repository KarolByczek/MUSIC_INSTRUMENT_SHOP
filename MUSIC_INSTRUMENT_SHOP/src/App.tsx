import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage  from './HomePage';
import GuitarsPage from './pages/GuitarsPage';
import './index.scss';
import SaxophonesPage from './pages/SaxophonesPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guitars" element={<GuitarsPage />} />
        <Route path="/saxophones" element={<SaxophonesPage />} />
      </Routes>
    </Router>
  );
}

export default App;