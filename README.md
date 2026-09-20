# BuyZone — Full Stack Ecommerce Platform 🛒

**Live Preview:** The server is running on port 3000 — open the preview link above!

### ✨ Features Built

**Frontend (Modern SPA - No Build Step)**
- ⚡ Lightning-fast vanilla JS with modern UI/UX
- 🎨 Custom design system (Outfit + Space Grotesk, Orange/Black theme)
- 🔍 Real-time search with autocomplete suggestions
- 🛍️ Category browsing, price filters, rating filters, free shipping toggle
- 🖼️ Hero with floating product cards + animated blobs
- 🛒 Cart drawer with qty controls, localStorage persistence
- ❤️ Wishlist with move-to-cart
- 👁️ Product modal with gallery, related products
- 🔐 Auth modal (login/register) - demo: `demo@buyzone.com / demo123`
- 💳 Full checkout flow with order confirmation
- 📱 Fully responsive (mobile filters, bottom sheets)
- 🔔 Toast notifications, skeleton loaders, micro-animations

**Backend (Node.js + Express)**
- `GET /api/products` - with query: category, search, minPrice, maxPrice, rating, sort
- `GET /api/products/:id` - with related products
- `GET /api/categories`
- `POST /api/auth/login` & `/register` - mock JWT
- `POST /api/orders` - creates order with ID `BZ-XXXX`
- `GET /api/stats` - admin stats
- Static serving of frontend

**Data**
- 12 curated products across 6 categories (Electronics, Fashion, Home, Beauty, Sports, Books)
- Rich product model: images, ratings, badges, features, free shipping
- In-memory orders storage

### 🏗️ Architecture

```
buyzone/
├── server.js          # Express API + static serving
├── package.json
└── public/
    ├── index.html     # Full ecommerce layout
    ├── styles.css     # 1000+ lines modern CSS, no framework
    └── app.js         # State management, cart, filters, modals
```

### 🚀 Run Locally

```bash
cd buyzone
npm install
npm start
# open http://localhost:3000
```

### 🔑 Demo Credentials

- Email: `demo@buyzone.com`
- Password: `demo123`

Or create a new account via Sign Up.

### 🧠 Full Stack Highlights

1. **No frameworks on frontend** - pure HTML/CSS/JS for instant load, but feels like Next.js
2. **Real API integration** - frontend fetches from /api, not hardcoded
3. **Persistence** - cart/wishlist/user in localStorage
4. **Production-ready UI** - sticky header, blur backdrop, cart drawer, modal system, checkout steps
5. **Performance** - lazy images, skeleton states, optimistic UI

### 📦 Next Steps to Scale

- Add database (MongoDB/Postgres + Prisma)
- Add Stripe payment integration
- Add admin dashboard at /admin with order management
- Add JWT middleware + bcrypt
- Add image upload, reviews, inventory tracking

Built with ❤️ in Kathmandu — 2026
