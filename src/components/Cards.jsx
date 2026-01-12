import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Cards( {search} ) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  

const filtered = products.filter((p) =>
  (search || "").toLowerCase() === ""
    ? true
    : p.title.toLowerCase().includes(search.toLowerCase())
);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">Loading…</div>
    );

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            img={p.image}
            title={p.title}
            brand={p.category}
            price={p.price.toFixed(2)}
            oldPrice={(p.price * 1.5).toFixed(2)}
            discount={20}
            rating={p.rating}
            description={p.description}
            id={p.id}
          />
        ))}
      </div>
    </main>
  );
}
