import "../stylesheets/App.css"
import AboutPage from "./AboutPage";
import AgenciesPage from "./AgenciesPage";
import BookingsPage from "./BookingsPage";
import Homepage from "./Homepage";
import ModelsPage from "./ModelsPage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/agencies" element={<AgenciesPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
