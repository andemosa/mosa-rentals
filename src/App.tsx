import { Routes, Route } from "react-router-dom";

import Car from "pages/Car";
import Cars from "pages/Cars";
import Home from "pages/Home";
import Payment from "pages/Payment";

import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";

function App() {

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col bg-[#F6F7F9]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="cars">
          <Route index element={<Cars />} />
          <Route path="query" element={<Cars />} />
          <Route path=":carId" element={<Car />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
