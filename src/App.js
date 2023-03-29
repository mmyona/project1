import { Route, Link, Routes } from "react-router-dom";
import { Router } from "./Router/Router";

//routing components
import Home from "./pages/Home";
import Router1 from "./pages/Router1";
import Router2 from "./pages/Router2";

function App() {
  return (
    <div className="App">
      <div>
        <p>
          <Link to="/">홈</Link>
        </p>
        <p>
          <Link to="/r1">Router1</Link>
        </p>
        <p>
          <Link to="/r2">Unity map</Link>
        </p>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/r1" element={<Router1 />} />
          <Route path="/r2" element={<Router2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
