import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Mainpage from "./pages/Mainpage";

//components
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
