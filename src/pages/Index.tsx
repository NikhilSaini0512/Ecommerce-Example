
import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import SearchFilter from '@/components/SearchFilter';
import CartSidebar from '@/components/CartSidebar';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    return uniqueCategories;
  }, []);

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  // Sort products
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-desc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortOption]);

  // Featured products (top 4 highest rated)
  const featuredProducts = useMemo(() => {
    return [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  }, [products]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearchChange={setSearchQuery} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Discover Quality Products at Great Prices</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">Shop our extensive collection of high-quality products with fast delivery and exceptional customer service.</p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Featured Products</h2>
              <p className="text-slate-600">Our most popular and highest-rated selections</p>
            </div>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-3">
                  <img
                    src={`${product.image}?w=400&h=400&fit=crop&auto=format`}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-100">
                      Quick View
                    </Button>
                  </div>
                </div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-blue-600 font-semibold">₹{product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Product Listing */}
      <main className="flex-1 container mx-auto px-4 py-12 bg-gray-50">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">All Products</h2>
          
          <SearchFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
          
          <ProductGrid products={sortedProducts} />
        </div>
      </main>
      
      {/* Trust Badges */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="mb-4 text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                  <line x1="12" y1="20" x2="12" y2="20"></line>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over ₹500</p>
            </div>
            <div className="p-4">
              <div className="mb-4 text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
            <div className="p-4">
              <div className="mb-4 text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Secure Checkout</h3>
              <p className="text-gray-600 text-sm">100% protected payments</p>
            </div>
            <div className="p-4">
              <div className="mb-4 text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M16 13a2 2 0 0 1-2 2H9.95a2.5 2.5 0 0 0 0 5h4.55a2.5 2.5 0 0 0 2.5-2.5"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Dedicated customer support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopNow</h3>
              <p className="text-gray-400 mb-4">Your one-stop destination for quality products at affordable prices.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">All Products</a></li>
                <li><a href="#" className="hover:text-blue-400">New Arrivals</a></li>
                <li><a href="#" className="hover:text-blue-400">Best Sellers</a></li>
                <li><a href="#" className="hover:text-blue-400">Discounts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400">Shipping Info</a></li>
                <li><a href="#" className="hover:text-blue-400">Returns</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Market Street</p>
                <p>Bengaluru, Karnataka 560001</p>
                <p className="mt-2">support@shopnow.com</p>
                <p>+91 98765 43210</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} ShopNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <CartSidebar />
    </div>
  );
};

export default Index;
