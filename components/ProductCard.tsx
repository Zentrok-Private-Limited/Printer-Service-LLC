interface ProductCardProps {
  name: string;
  price: string;
}

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <div className="h-40 bg-gray-200 rounded mb-4" />
      <h4 className="font-semibold text-gray-800">{name}</h4>
      <p className="text-blue-700 font-bold mt-2">{price}</p>
      <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">
        Add to Cart
      </button>
    </div>
  );
}
