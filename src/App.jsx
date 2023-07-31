import { React } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Universidades from "./pages/Universidades";
import Contador from "./pages/Contador";

function App() {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <NavLink className="text-xl" to={"/Contador"}>
              Contador
            </NavLink>
          </ul>
          <ul>
            <NavLink className="text-xl" to={"/"}>
              Universidades
            </NavLink>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Universidades />} />
        <Route path="/Contador" element={<Contador />} />
      </Routes>
    </main>
  );
}

export default App;
