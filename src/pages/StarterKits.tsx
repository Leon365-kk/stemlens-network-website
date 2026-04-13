import { useState } from 'react';
import { Search, ShoppingCart, Eye, Star, Filter, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating?: number;
  inStock: boolean;
}

const starterKitsProducts: Product[] = [
  {
    id: 1,
    name: "Smart 4WD Robot Set",
    price: 6500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/img_6751-320x320.png",
    category: "Robotics Kits",
    description: "This robotic platform features a double acrylic chassis with 4 geared motors powered by an L298N motor driver for precise movement. Perfect for robotics projects and automation.",
    inStock: true
  },
  {
    id: 2,
    name: "Oraimo Micro USB cable for ESP",
    price: 300.00,
    image: "https://bluepacknova.com/wp-content/uploads/2025/07/cable-320x320.webp",
    category: "Accessories",
    description: "High-quality micro USB cable specifically designed for ESP boards and development kits. Durable and reliable for programming and power supply.",
    inStock: true
  },
  {
    id: 3,
    name: "SCT-013-000 50mA 30A Switching Current Transformer sensor",
    price: 1500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2026/01/img_2611-320x320.jpeg",
    category: "Sensors",
    description: "Professional current transformer sensor for monitoring electrical currents from 50mA to 30A. Essential for power monitoring projects.",
    inStock: true
  },
  {
    id: 4,
    name: "TCS3200D Color Recognition Sensor",
    price: 1500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2026/03/1001404503-320x320.jpg",
    category: "Sensors",
    description: "Advanced color recognition sensor capable of detecting and identifying various colors. Perfect for color sorting and detection applications.",
    inStock: true
  },
  {
    id: 5,
    name: "4 DOF Acrylic Robot arm arduino",
    price: 3500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2026/03/1001404500-320x320.jpg",
    category: "Robotics Kits",
    description: "4 Degrees of Freedom acrylic robot arm compatible with Arduino. Ideal for learning robotics and automation concepts.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 6,
    name: "Arduino Uno Starter Kit",
    price: 2500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-uno-starter-kit-320x320.jpg",
    category: "Arduino Kits",
    description: "Complete Arduino Uno starter kit with all essential components for beginners. Includes breadboard, wires, LEDs, sensors, and more.",
    rating: 5.0,
    inStock: true
  },
  {
    id: 7,
    name: "Raspberry Pi 4 Starter Kit",
    price: 4500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/rpi4-starter-kit-320x320.jpg",
    category: "Raspberry Pi Kits",
    description: "Comprehensive Raspberry Pi 4 starter kit with case, power supply, SD card, and essential accessories for projects.",
    rating: 4.8,
    inStock: true
  },
  {
    id: 8,
    name: "3D Printer Starter Kit",
    price: 8500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/3d-printer-kit-320x320.jpg",
    category: "3D Printing",
    description: "Complete 3D printer starter kit with everything needed to start 3D printing. Includes filament, tools, and setup guide.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 9,
    name: "ESP32 Development Board Kit",
    price: 1200.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/esp32-dev-kit-320x320.jpg",
    category: "IoT Kits",
    description: "ESP32 development board kit with WiFi and Bluetooth capabilities. Perfect for IoT projects and wireless applications.",
    inStock: true
  },
  {
    id: 10,
    name: "STEM Electronics Learning Kit",
    price: 1800.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/stem-electronics-kit-320x320.jpg",
    category: "Educational Kits",
    description: "Comprehensive STEM electronics learning kit for students. Includes components for various electronic experiments and projects.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 11,
    name: "Drone Building Kit",
    price: 5500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/drone-kit-320x320.jpg",
    category: "Drone Kits",
    description: "Complete drone building kit with frame, motors, flight controller, and all necessary components. Perfect for learning drone technology.",
    inStock: true
  },
  {
    id: 12,
    name: "IoT Smart Home Starter Kit",
    price: 3200.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/smart-home-kit-320x320.jpg",
    category: "IoT Kits",
    description: "Smart home starter kit with sensors, relays, and microcontroller for building home automation projects.",
    rating: 4.4,
    inStock: true
  }
];

const starterKitsCategories = [
  "All Products",
  "Robotics Kits",
  "Arduino Kits", 
  "Raspberry Pi Kits",
  "3D Printing",
  "IoT Kits",
  "Educational Kits",
  "Drone Kits",
  "Sensors",
  "Accessories"
];

export default function StarterKits() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [showQuickView, setShowQuickView] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<number[]>([]);

  const filteredProducts = starterKitsProducts.filter(product => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setShowQuickView(product)}
          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        >
          <Eye className="w-4 h-4 text-gray-700" />
        </button>
        {product.rating && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            {product.rating}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">
          {product.name}
        </h3>
        
        <p className="text-lg font-bold text-[#D62828] mb-2">
          KSh {product.price.toFixed(2)}
        </p>
        
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <button
          onClick={() => handleAddToCart(product.id)}
          className="w-full bg-[#0B1E3B] text-white py-2 px-4 rounded-lg hover:bg-[#1a2f4a] transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#0B1E3B]">3D Printing / Starter Kits</h1>
              <p className="text-sm text-gray-600 mt-1">Complete kits for your STEM projects and learning journey</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search starter kits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D62828] focus:border-transparent w-64"
                />
              </div>
              
              {/* Cart */}
              <button className="relative p-2 bg-[#0B1E3B] text-white rounded-lg hover:bg-[#1a2f4a] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D62828] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-800">Categories</h2>
                <Filter className="w-4 h-4 text-gray-500" />
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {starterKitsCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#D62828] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-[#0B1E3B] to-[#1a2f4a] rounded-xl p-6 text-white">
                <h2 className="text-xl font-bold mb-2">🚀 Featured Starter Kits</h2>
                <p className="text-sm opacity-90 mb-4">Perfect for beginners and advanced makers - everything you need to start your STEM journey</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">Beginner Friendly</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">Complete Sets</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">Tutorial Included</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">STEM Certified</span>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mb-6 text-sm text-gray-600">
              Showing {filteredProducts.length} of {starterKitsProducts.length} products
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No starter kits found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">{showQuickView.name}</h2>
                <button
                  onClick={() => setShowQuickView(null)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={showQuickView.image} 
                    alt={showQuickView.name}
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div>
                  <p className="text-2xl font-bold text-[#D62828] mb-4">
                    KSh {showQuickView.price.toFixed(2)}
                  </p>
                  
                  <p className="text-gray-600 mb-4">{showQuickView.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {showQuickView.category}
                    </span>
                  </div>
                  
                  {showQuickView.rating && (
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(showQuickView.rating!) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {showQuickView.rating} out of 5
                      </span>
                    </div>
                  )}
                  
                  <button
                    onClick={() => {
                      handleAddToCart(showQuickView.id);
                      setShowQuickView(null);
                    }}
                    className="w-full bg-[#0B1E3B] text-white py-3 px-6 rounded-lg hover:bg-[#1a2f4a] transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
