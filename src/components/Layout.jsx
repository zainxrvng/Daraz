import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // ← import it

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* page content goes here */}
      </main>
      <Footer />
    </div>
  );
}
