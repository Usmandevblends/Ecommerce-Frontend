import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart/>} ></Route>
          <Route path="/Checkout" element={<Checkout/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;