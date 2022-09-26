
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetMovies from "./PAGES/GetMovies";
import AddMovie from './PAGES/AddMovie';
import MovieItemDetails from "./PAGES/MovieItemDetails";
import './App.css';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetMovies />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/details" element={<MovieItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
