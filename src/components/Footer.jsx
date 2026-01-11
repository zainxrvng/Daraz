import visa from "/visa.png";
import mastercard from "/mastercard.png";
import cod from "/cod.png";
import playStore from "/play-store.png";
import appStore from "/app-store.png";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* main grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {/* col 1 - Customer Care */}
        <div>
          <h3 className="font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                How to Buy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Digital Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Daraz Blog
              </a>
            </li>
          </ul>
        </div>

        {/* col 2 - About Daraz */}
        <div>
          <h3 className="font-semibold mb-3">About Daraz</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Happy Shopping
              </a>
            </li>
          </ul>
        </div>

        {/* col 3 - Payment & Delivery */}
        <div>
          <h3 className="font-semibold mb-3">Payment Methods</h3>
          <div className="flex gap-2 mb-4">
            <img src={visa} alt="Visa" className="h-10" />
            <img src={mastercard} alt="MC" className="h-10" />
            <img src={cod} alt="COD" className="h-10" />
          </div>

          <h3 className="font-semibold mb-2">Verified by</h3>
          <div className="flex gap-2">
            <img src={visa} alt="visa" className="h-10 grayscale" />
            <img src={mastercard} alt="mc" className="h-10 grayscale" />
          </div>
        </div>

        {/* col 4 - Download App */}
        <div>
          <h3 className="font-semibold mb-3">Download App</h3>
          <p className="text-gray-300 text-xs mb-3">Online Shopping App</p>
          <div className="flex flex-col gap-2">
            <a href="#">
              <img
                src={playStore}
                alt="Google Play"
                className="h-25 object-contain"
              />
            </a>
            <a href="#">
              <img
                src= {appStore}
                alt="App Store"
                className="h-10 object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-gray-400">
          © 2026 Daraz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
