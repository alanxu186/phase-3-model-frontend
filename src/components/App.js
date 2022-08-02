import "../stylesheets/App.css"
import AboutPage from "./AboutPage";
import AgenciesPage from "./AgenciesPage";
import BookingsPage from "./BookingsPage";
import Homepage from "./Homepage";
import ModelsPage from "./ModelsPage";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/agencies" element={<AgenciesPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
