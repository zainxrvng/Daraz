export default function ProductCard({
  img,
  title,
  brand,
  price,
  oldPrice,
  discount,
  rating,
}) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`h-4 w-4 ${
        i < Math.floor(rating) ? "text-orange-400" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
    </svg>
  ));

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
      <div className="relative">
        {discount && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
            -{discount}%
          </span>
        )}
        <img src={img} alt={title} className="w-full h-48 object-contain p-2" />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-green-600 uppercase mt-1">{brand}</p>

        <div className="flex items-center gap-1 my-1">{stars}</div>

        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-blue-600 font-bold">${price}</span>
            {oldPrice && (
              <span className="text-gray-400 text-xs line-through ml-2">
                ${oldPrice}
              </span>
            )}
          </div>
          <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
