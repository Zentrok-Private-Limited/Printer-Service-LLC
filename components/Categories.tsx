const categories = [
  "Ink Cartridges",
  "Toner Cartridges",
  "Drum Units",
  "Printer Accessories",
];

export default function Categories() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-center mb-10">
        Shop by Category
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer text-center"
          >
            <h4 className="font-semibold text-gray-800">
              {category}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
