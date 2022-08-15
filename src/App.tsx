import Home from "pages/Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center selection:bg-green-900">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
