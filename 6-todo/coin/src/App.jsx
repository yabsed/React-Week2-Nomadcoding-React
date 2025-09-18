import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Nomadcoding-React/" element={<Home />} />
        <Route path="/Nomadcoding-React/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
