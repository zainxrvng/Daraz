import { useState } from "react";
import { ShoppingCart } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import AuthModal from "./AuthModal";
import CategoryLinks from "./CategoryLinks";
import whitelogo from "/whitelogo.png";
import Searchbar from "./Searchbar";
import Cards from "./Cards";


export default function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const { user, logout } = useAuth();
  const { totalQty } = useCart();
  


  const openAuth = (mode) => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  return (
    <>
      <header className="w-full">
        {/* orange top strip */}
        <div className="bg-[#F85606] text-white text-xs md:text-sm">
          <div className="max-w-7xl mx-auto flex justify-end items-center gap-3 md:gap-6 px-4 py-2">
            <button className="hover:underline">Save More on App</button>
            <button className="hover:underline">Sell on Daraz</button>
            <button className="hover:underline">Help & Support</button>

            {user ? (
              <>
                <span className="text-white text-sm">
                  Hi, {user.phone || user.email}
                </span>
                <button
                  onClick={logout}
                  className="text-white underline text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => openAuth("login")}
                  className="hover:underline"
                >
                  Login
                </button>
                <button
                  onClick={() => openAuth("register")}
                  className="hover:underline"
                >
                  Sign-up
                </button>
              </>
            )}

            <button className="hover:underline">زبان تبدیل کریں</button>
          </div>
        </div>

        {/* search row */}
        <div className="bg-[#F85606]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
            <img
              src={whitelogo}
              alt="Daraz"
              className="h-10 md:h-12 object-contain"
            />
            <Searchbar />

            <div className="flex items-center gap-3 text-white text-sm">
              <div className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <ShoppingCart sx={{ fontSize: 28 }} />
                  {totalQty > 0 && (
                    <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 grid place-items-center">
                      {totalQty}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline">Cart</span>
              </div>
            </div>
          </div>
        </div>

        <CategoryLinks />
      </header>

      <AuthModal open={showAuth} setOpen={setShowAuth} startMode={authMode} />
    </>
  );
}
