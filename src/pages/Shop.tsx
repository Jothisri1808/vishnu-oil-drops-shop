
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  const categories = [
    { id: "all", name: "All Products" },
    { id: "cooking", name: "Cooking Oils" },
    { id: "beauty", name: "Beauty Oils" },
    { id: "health", name: "Health Oils" },
    { id: "premium", name: "Premium Oils" },
  ];
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === "all" || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-natural-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-forest-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-playfair font-bold mb-2">Our Products</h1>
          <p className="text-forest-100">
            Explore our collection of premium organic cold-pressed oils
          </p>
        </div>
      </div>
      
      {/* Filter and Search */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === category.id 
                    ? 'bg-forest-600 text-white' 
                    : 'bg-white text-forest-700 hover:bg-forest-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container-custom pb-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card group bg-white">
                <div className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <p className="text-forest-700 font-bold mb-2">₹{product.price}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description.substring(0, 60)}...</p>
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      className="text-sm border-forest-600 text-forest-700 hover:bg-forest-50"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-forest-600 hover:bg-forest-700 text-white"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
            <Button 
              variant="outline" 
              className="border-forest-600 text-forest-700"
              onClick={() => {
                setActiveFilter("all");
                setSearchTerm("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
