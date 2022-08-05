import "../stylesheets/App.css"
import AboutPage from "./AboutPage";
import BookedPage from "./BookedPage"
import BookingsPage from "./BookingsPage";
import FavoritedPage from "./FavoritedPage"
import Homepage from "./Homepage";
import ModelsList from "./ModelsList";
import MenuBar from "./MenuBar";
import ProfilePage from "./ProfilePage";
import SearchBar from "./SearchBar";
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";


function App() {
  const [models, setModels] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState ('')
  
  useEffect(() => {
    fetch('http://localhost:9292/models')
        .then(res => res.json())
        .then(data => setModels(data))
}, [isLoading])
//creating a state to trigger re-render in the dependency array

  function handleModelButton(itemToUpdate){
    const updatedButton = models.map((model) => model.id === itemToUpdate ? itemToUpdate : model);
    setModels(updatedButton);
  }

  // console.log(models)

  // const filterSearch = models.filter((mod) => (mod.first_name.toString().toLowercase().includes(search.toLowerCase())) || mod.last_name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className="App">
      <MenuBar />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/models" element={<ModelsList search={search} setSearch={setSearch} isLoading={isLoading} setIsLoading={setIsLoading} models={models} handleModelButton={handleModelButton} />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/booked" element={<BookedPage />} />
        <Route path="/favorited" element={<FavoritedPage />} />
        <Route path="/profile/:id" element={<ProfilePage models={models}/>} />
      </Routes>
    </div>
  );
}

export default App;
