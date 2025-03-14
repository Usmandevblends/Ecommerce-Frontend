import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { useState } from "react";
import Order from "./Pages/Order";
import FilterData from "./Pages/FilterData";

function App() {
  const [order, setOrder] = useState(null)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/Checkout" element={<Checkout setOrder={setOrder} />}></Route>
          <Route path="/order-confirmation" element={<Order order={order} />}></Route>
          <Route path="/filter-data" element={<FilterData/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;