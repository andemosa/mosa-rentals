import { Routes, Route } from "react-router-dom";

import Car from "pages/Car";
import Cars from "pages/Cars";
import Home from "pages/Home";
import Payment from "pages/Payment";
import Search from "pages/Search";

import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import List from "components/List/List";

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col bg-[#F6F7F9]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="cars" element={<Cars />}>
          <Route index element={<List />} />
          <Route path="search" element={<Search />} />
          <Route path=":carId" element={<Car />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
