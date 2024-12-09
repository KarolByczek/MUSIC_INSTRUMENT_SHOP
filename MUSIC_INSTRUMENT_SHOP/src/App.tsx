import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage  from './HomePage';
import GuitarsPage from './pages/GuitarsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guitars" element={<GuitarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;