import { Link } from "react-router-dom";

const categoryMap = [
  { label: "Electronics", slug: "electronics" },
  { label: "Jewelery", slug: "jewelery" },
  { label: "Men's Clothing", slug: "men's clothing" },
  { label: "Women's Clothing", slug: "women's clothing" },
];

export default function CategoryLinks() {
  return (
    <nav className="bg-[#F85606]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex gap-3 overflow-x-auto text-sm text-white scrollbar-hide">
        {categoryMap.map((c) => (
          <Link
            key={c.slug}
            to={`/category/${encodeURIComponent(c.slug)}`}
            className="whitespace-nowrap px-3 py-1 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            {c.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
