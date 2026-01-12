import { useState } from "react";
import ProductModal from "./ProductModal";
import { useCart } from "../contexts/CartContext";

export default function ProductCard(props) {
  const {
    img,
    title,
    brand,
    price,
    oldPrice,
    discount,
    rating = 0, // default if not supplied
    description,
    id,
  } = props;

  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();

  // decimal + half-star
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars; // 0–1

  const stars = Array.from({ length: 5 }, (_, i) => {
    let fill = 1;
    if (i >= fullStars + 1) fill = 0;
    else if (i === fullStars) fill = partial;

    return (
      <div key={i} className="relative h-4 w-4">
        {/* empty star */}
        <svg
          className="h-4 w-4 text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
        </svg>
        {/* filled portion */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${fill * 100}%` }}
        >
          <svg
            className="h-4 w-4 text-orange-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
      >
        <div className="flex-1">
          <div className="relative">
            {discount && (
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
                -{discount}%
              </span>
            )}
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-contain p-2"
            />
          </div>

          <div className="p-3">
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
              {title}
            </h3>
            <p className="text-xs text-green-600 uppercase mt-1">{brand}</p>
            <div className="flex items-center gap-1 my-1">{stars}</div>

            <div className="flex items-center justify-between mt-2">
              <div>
                <span className="text-orange-600 font-bold">RS {price}</span>
                {oldPrice && (
                  <span className="text-gray-400 text-xs line-through ml-2">
                    Rs {oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart({ ...props }, 1);
          }}
          className="mt-auto w-full bg-blue-600 text-white py-2 rounded-b hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>

      {open && (
        <ProductModal product={{ ...props }} close={() => setOpen(false)} />
      )}
    </>
  );
}
