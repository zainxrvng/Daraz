// components/ProductModal.jsx
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import QuantityStepper from "./QuantityStepper";
import Star from "@mui/icons-material/Star";

export default function ProductModal({ product, close }) {
 // safety
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={
        i < Math.floor(product.rating.rate)
          ? "text-orange-400"
          : "text-gray-300"
      }
    />
  ));

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
      onClick={close}
    >
      <div
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* orange header */}
        <div className="bg-[#F85606] text-white p-4 flex justify-between items-center">
          <span className="font-semibold">Product Details</span>
          <button onClick={close} className="text-xl">
            ✕
          </button>
        </div>

        {/* body */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <img
            src={product.img}
            alt={product.title}
            className="w-full object-contain"
          />

          <div>
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

            {/* rating */}
            <div className="flex items-center gap-2 mb-4">
              {stars}
              <span className="text-sm">({product.rating.count})</span>
            </div>

            {/* price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl text-[#F85606] font-bold">
                Rs {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through">
                  Rs {product.oldPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs">
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* quantity stepper */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Quantity</label>
              <QuantityStepper qty={qty} setQty={setQty} />
            </div>

            {/* actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  addToCart(product, qty);
                  close();
                }}
                className="flex-1 bg-[#F85606] text-white py-3 rounded font-semibold hover:bg-[#d04905]"
              >
                Add to Cart
              </button>
              <button className="flex-1 border border-[#F85606] text-[#F85606] py-3 rounded font-semibold hover:bg-orange-50">
                Buy Now
              </button>
            </div>

            {/* description (rubric requirement) */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
