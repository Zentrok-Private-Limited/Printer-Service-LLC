import ProductCard from "./ProductCard";

const products = [
  { name: "HP 65 Black Ink Cartridge", price: "$24.99" },
  { name: "Canon PG-245 Ink Cartridge", price: "$19.99" },
  { name: "Brother TN760 Toner", price: "$79.99" },
  { name: "Epson 212XL Ink Cartridge", price: "$29.99" },
];

export default function FeaturedProducts() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-center mb-10">
        Featured Products
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
