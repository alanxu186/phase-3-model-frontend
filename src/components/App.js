import "../stylesheets/App.css"
import AboutPage from "./AboutPage";
import BookingsPage from "./BookingsPage";
import Homepage from "./Homepage";
import ModelsPage from "./ModelsPage";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./ProfilePage";



function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
