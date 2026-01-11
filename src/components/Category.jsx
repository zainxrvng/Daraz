import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Category() {
  const { slug } = useParams(); // ← from /category/:slug
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${slug}`) 
      .then((r) => r.json())
      .then((d) => {
        setProducts(Array.isArray(d) ? d : []);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">Loading…</div>
    );

  if (!products.length)
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        No products in “{slug}”.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 capitalize">{slug}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            img={p.image}
            title={p.title}
            brand={p.category}
            price={p.price.toFixed(2)}
            oldPrice={(p.price * 1.5).toFixed(2)}
            discount={20}
            rating={p.rating.rate}
          />
        ))}
      </div>
    </div>
  );
}
