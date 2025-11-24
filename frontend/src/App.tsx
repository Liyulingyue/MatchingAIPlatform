import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MatchingRoom from './pages/MatchingRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matching_room" element={<MatchingRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
