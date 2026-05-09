import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import List from "./pages/list";
import Detail from "./pages/detail";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <HashRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </HashRouter>
  );
}

export default App;