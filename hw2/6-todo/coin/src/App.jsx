import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/React-Week2-Nomadcoding-React/" element={<Home />} />
        <Route path="/React-Week2-Nomadcoding-React/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
