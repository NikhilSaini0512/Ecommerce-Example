
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4">
          <path d="M3 16V4a2 2 0 0 1 2-2h11"/>
          <path d="m14 2 6 6"/>
          <path d="M5 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h15a2 2 0 0 0 1.857-1.257"/>
          <path d="M20 8v12a2 2 0 1 1-4 0"/>
          <circle cx="10" cy="14" r="8"/>
          <line x1="16" y1="4" x2="20" y2="8"/>
          <line x1="18" y1="15" x2="18" y2="15.01"/>
          <line x1="10" y1="10" x2="10" y2="18"/>
          <line x1="6" y1="14" x2="14" y2="14"/>
        </svg>
        <h2 className="text-xl font-medium text-gray-700 mb-2">No products found</h2>
        <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
