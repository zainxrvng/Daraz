import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./contexts/CartContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Daraz">
      <AuthProvider>
        <CartProvider>
          <App />
          <Toaster position="top-center" />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
