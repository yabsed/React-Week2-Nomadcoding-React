import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
