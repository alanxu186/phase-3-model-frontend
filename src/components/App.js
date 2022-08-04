import "../stylesheets/App.css"
import AboutPage from "./AboutPage";
import BookedPage from "./BookedPage"
import BookingsPage from "./BookingsPage";
import FavoritedPage from "./FavoritedPage"
import Homepage from "./Homepage";
import ModelsPage from "./ModelsPage";
import MenuBar from "./MenuBar";
import ProfilePage from "./ProfilePage";
import { Routes, Route } from 'react-router-dom'



function App() {

  const [selectedModel, setSelectedModel] = useState({
    attributes: {
      
    }
  })

  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/booked" element={<BookedPage/>} />
        <Route path="/favorited" element={<FavoritedPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
