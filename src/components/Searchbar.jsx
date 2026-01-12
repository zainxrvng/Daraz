export default function Searchbar() {

  return (
    <div className="flex-1 relative max-w-xl">
      <input
        type="search"
        placeholder="Search in Daraz"
        className="w-full px-4 py-2.5 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F85606] bg-white"
      />
      <button className="absolute right-0 top-0 h-full px-5 bg-yellow-400 text-black font-semibold rounded-r-md hover:bg-yellow-500">
        SEARCH
      </button>
    </div>
  );
}
