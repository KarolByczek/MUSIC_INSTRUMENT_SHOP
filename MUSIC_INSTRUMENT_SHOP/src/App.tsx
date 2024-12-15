import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage  from './HomePage';
import GuitarsPage from './pages/GuitarsPage';
import SaxophonesPage from './pages/SaxophonesPage';
import DrumsPage from './pages/DrumsPage';
import './index.scss';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guitars" element={<GuitarsPage />} />
        <Route path="/saxophones" element={<SaxophonesPage />} />
        <Route path="/drums" element={<DrumsPage />} />
      </Routes>
    </Router>
  );
}

export default App;