// components/QuantityStepper.jsx
export default function QuantityStepper({ qty, setQty }) {
  return (
    <div className="flex items-center border rounded w-28">
      <button
        onClick={() => setQty(Math.max(1, qty - 1))}
        className="px-3 py-1"
      >
        -
      </button>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(Math.max(1, +e.target.value))}
        className="w-full text-center"
      />
      <button onClick={() => setQty(qty + 1)} className="px-3 py-1">
        +
      </button>
    </div>
  );
}
