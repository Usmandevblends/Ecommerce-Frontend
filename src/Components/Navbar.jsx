import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Modal from './Modal'
import { setSearchTerm } from "../Redux/ProductSlice";

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userObj = localStorage.getItem('userObj');
    if (userObj) {
      const user = JSON.parse(userObj);
      setUser(user);
    }
  }, [isModelOpen]);

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
    alert("Please select a product first ");
  }

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  }

  const handleLogout = () => {
    localStorage.removeItem('userObj');
    setUser({});
  }

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link to="/" onClick={handleLogout}>e-Shop</Link>
          </div>
          <div className="relative flex-1 mx-4">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Product"
                className="w-full border py-2 px-4"
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className="absolute top-3 right-3 rounded-full flex items-center text-red-500"></FaSearch>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-lg" />
              {products.length > 0 && (
                <span className="absolute top-0 right-0 text-xs w-3 h-3 bg-red-600 rounded-full text-white flex items-center justify-center">
                  {products.length}
                </span>
              )}
            </Link>
            <button className="hidden md:block" onClick={() => setIsModelOpen(true)} >
              {
                user.name ? user.name : "Login | Register"
              }
            </button>
            <button className="block md:hidden">
              <FaUser />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 py-4 font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
          <Link to="/" className="hover:underline">
            About
          </Link>
        </div>
        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
          {isLogin ? <Login openSignUp={openSignUp} setIsLogin={setIsLogin} setIsModelOpen={setIsModelOpen} /> : <Register setIsLogin={setIsLogin} setIsModelOpen={setIsModelOpen} openLogin={openLogin} />}
        </Modal>
      </nav>
    </>
  );
}

export default Navbar;
