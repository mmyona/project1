import { Router } from "./Router/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

/*

      <div>
        <p>
          <Link to="/">HOME</Link>
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
      */
export default App;
