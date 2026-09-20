const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock Database
const categories = [
  { id: 'electronics', name: 'Electronics', icon: '💻', count: 156, color: '#3b82f6' },
  { id: 'fashion', name: 'Fashion', icon: '👕', count: 230, color: '#ec4899' },
  { id: 'home', name: 'Home & Living', icon: '🏠', count: 89, color: '#10b981' },
  { id: 'beauty', name: 'Beauty', icon: '💄', count: 112, color: '#f59e0b' },
  { id: 'sports', name: 'Sports', icon: '⚽', count: 76, color: '#8b5cf6' },
  { id: 'books', name: 'Books', icon: '📚', count: 54, color: '#ef4444' },
];

const products = [
  {
    id: 1,
    name: "AirPods Max - Space Gray",
    brand: "Apple",
    category: "electronics",
    price: 549.00,
    originalPrice: 599.00,
    rating: 4.8,
    reviews: 3421,
    stock: 15,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
    ],
    description: "High-fidelity audio, Active Noise Cancellation, Spatial Audio. The ultimate over-ear listening experience.",
    features: ["Active Noise Cancellation", "Spatial Audio", "20H Battery", "Premium Build"],
    freeShipping: true
  },
  {
    id: 2,
    name: "Nike Air Jordan 1 Retro High",
    brand: "Nike",
    category: "fashion",
    price: 179.99,
    originalPrice: 220.00,
    rating: 4.9,
    reviews: 8923,
    stock: 8,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"],
    description: "Iconic silhouette, premium leather, timeless style. A must-have for sneaker enthusiasts.",
    features: ["Genuine Leather", "Air Cushioning", "Classic Design"],
    freeShipping: true
  },
  {
    id: 3,
    name: "MacBook Pro 16\" M3 Max",
    brand: "Apple",
    category: "electronics",
    price: 2499.00,
    originalPrice: 2699.00,
    rating: 4.9,
    reviews: 1245,
    stock: 5,
    badge: "New",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"],
    description: "Supercharged by M3 Max. Up to 22 hours battery. Liquid Retina XDR display.",
    features: ["M3 Max Chip", "32GB RAM", "1TB SSD", "22H Battery"],
    freeShipping: true
  },
  {
    id: 4,
    name: "Minimalist Ceramic Vase Set",
    brand: "Nordic Home",
    category: "home",
    price: 45.00,
    originalPrice: 65.00,
    rating: 4.6,
    reviews: 532,
    stock: 30,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?w=600&q=80"],
    description: "Handcrafted ceramic vases, perfect for modern living spaces.",
    features: ["Handmade", "Set of 3", "Matte Finish"],
    freeShipping: false
  },
  {
    id: 5,
    name: "Sony WH-1000XM5 Wireless",
    brand: "Sony",
    category: "electronics",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 5621,
    stock: 20,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80"],
    description: "Industry-leading noise cancellation, crystal clear hands-free calling.",
    features: ["30H Battery", "Fast Charge", "Multipoint"],
    freeShipping: true
  },
  {
    id: 6,
    name: "Oversized Hoodie - Cream",
    brand: "Essentials",
    category: "fashion",
    price: 89.00,
    originalPrice: 120.00,
    rating: 4.5,
    reviews: 1023,
    stock: 45,
    badge: null,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"],
    description: "Heavyweight cotton blend, ultra soft fleece interior.",
    features: ["100% Cotton", "Oversized Fit", "Unisex"],
    freeShipping: true
  },
  {
    id: 7,
    name: "Dyson Supersonic Hair Dryer",
    brand: "Dyson",
    category: "beauty",
    price: 429.00,
    originalPrice: 429.00,
    rating: 4.8,
    reviews: 2341,
    stock: 12,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&q=80"],
    description: "Engineered for different hair types. Fast drying, no extreme heat.",
    features: ["Intelligent Heat Control", "5 Attachments", "Lightweight"],
    freeShipping: true
  },
  {
    id: 8,
    name: "PlayStation 5 Slim",
    brand: "Sony",
    category: "electronics",
    price: 499.99,
    originalPrice: 499.99,
    rating: 4.9,
    reviews: 7823,
    stock: 3,
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80"],
    description: "Next-gen gaming, ultra-high speed SSD, 4K gaming.",
    features: ["1TB SSD", "4K HDR", "DualSense"],
    freeShipping: true
  },
  {
    id: 9,
    name: "Lululemon Yoga Mat",
    brand: "Lululemon",
    category: "sports",
    price: 78.00,
    originalPrice: 98.00,
    rating: 4.7,
    reviews: 892,
    stock: 25,
    badge: null,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600&q=80"],
    description: "Extra cushioning, non-slip, eco-friendly materials.",
    features: ["5mm Thick", "Non-Slip", "Eco Rubber"],
    freeShipping: false
  },
  {
    id: 10,
    name: "Kindle Paperwhite 11th Gen",
    brand: "Amazon",
    category: "books",
    price: 139.99,
    originalPrice: 159.99,
    rating: 4.6,
    reviews: 4523,
    stock: 18,
    badge: "Editor's Pick",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"],
    description: "Purpose-built for reading, 6.8\" glare-free display, adjustable warm light.",
    features: ["Waterproof", "16GB", "Weeks Battery"],
    freeShipping: true
  },
  {
    id: 11,
    name: "Leather Crossbody Bag",
    brand: "Celine",
    category: "fashion",
    price: 245.00,
    originalPrice: 320.00,
    rating: 4.8,
    reviews: 445,
    stock: 10,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80"],
    description: "Premium full-grain leather, adjustable strap, minimalist hardware.",
    features: ["Full-Grain Leather", "RFID Protection", "Handcrafted"],
    freeShipping: true
  },
  {
    id: 12,
    name: "Smart Indoor Garden",
    brand: "Click & Grow",
    category: "home",
    price: 99.95,
    originalPrice: 129.95,
    rating: 4.4,
    reviews: 321,
    stock: 14,
    badge: null,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"],
    description: "Grow fresh herbs and veggies year-round with automated LED and watering.",
    features: ["9 Plant Pods", "Auto Watering", "App Control"],
    freeShipping: true
  }
];

let orders = [];
let users = [
  { id: 1, email: "demo@buyzone.com", password: "demo123", name: "Alex Morgan" }
];

// API Routes

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/products', (req, res) => {
  let result = [...products];
  const { category, search, sort, minPrice, maxPrice, rating } = req.query;

  if (category && category !== 'all') {
    result = result.filter(p => p.category === category);
  }
  if (search) {
    const s = search.toLowerCase();
    result = result.filter(p => 
      p.name.toLowerCase().includes(s) || 
      p.brand.toLowerCase().includes(s) ||
      p.description.toLowerCase().includes(s)
    );
  }
  if (minPrice) result = result.filter(p => p.price >= parseFloat(minPrice));
  if (maxPrice) result = result.filter(p => p.price <= parseFloat(maxPrice));
  if (rating) result = result.filter(p => p.rating >= parseFloat(rating));

  if (sort === 'price-low') result.sort((a,b) => a.price - b.price);
  if (sort === 'price-high') result.sort((a,b) => b.price - a.price);
  if (sort === 'rating') result.sort((a,b) => b.rating - a.rating);
  if (sort === 'newest') result.sort((a,b) => b.id - a.id);

  res.json(result);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  
  // Related products
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  res.json({ ...product, related });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials. Try demo@buyzone.com / demo123' });
  res.json({ 
    user: { id: user.id, email: user.email, name: user.name },
    token: 'mock_jwt_token_' + Date.now()
  });
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  res.json({ user: { id: newUser.id, email: newUser.email, name: newUser.name }, token: 'mock_jwt_token_' + Date.now() });
});

app.post('/api/orders', (req, res) => {
  const { items, total, shipping, customer } = req.body;
  if (!items || items.length === 0) return res.status(400).json({ error: 'Cart is empty' });
  
  const order = {
    id: 'BZ-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    items,
    total,
    shipping,
    customer,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
    estimatedDelivery: new Date(Date.now() + 3*24*60*60*1000).toISOString()
  };
  orders.push(order);
  res.json(order);
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

app.get('/api/stats', (req, res) => {
  res.json({
    totalProducts: products.length,
    totalOrders: orders.length,
    revenue: orders.reduce((sum, o) => sum + o.total, 0),
    categories: categories.length
  });
});

// Fallback for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 BuyZone running on http://0.0.0.0:${PORT}`);
});
