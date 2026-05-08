import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import List from "./pages/list";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;