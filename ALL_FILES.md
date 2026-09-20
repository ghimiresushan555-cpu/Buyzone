# BuyZone — All Files Hosted in Sandbox

**Location:** `/home/user/buyzone/`  
**Status:** Running on port 3000 (0.0.0.0) — LIVE PREVIEW active  
**Stack:** Node.js + Express + Vanilla JS SPA

---

## 📁 Project Structure

```
buyzone/
├── server.js              # Backend API + Static Hosting (340 lines)
├── package.json           # Dependencies (express, cors)
├── package-lock.json
├── README.md
├── HOSTING.md
├── ALL_FILES.md           # This file
└── public/
    ├── index.html         # Full Ecommerce UI (360 lines)
    ├── styles.css         # Modern Design System (1000+ lines)
    └── app.js             # Frontend Logic (489 lines)
```

---

## 1️⃣ package.json
```json
{
  "name": "buyzone-ecommerce",
  "version": "1.0.0",
  "description": "BuyZone - Full Stack Ecommerce Platform",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

---

## 2️⃣ server.js — Backend (Full Code)

Handles:
- GET /api/products?category=&search=&sort=&minPrice=&maxPrice=&rating=
- GET /api/products/:id + related
- GET /api/categories
- POST /api/auth/login (demo@buyzone.com / demo123)
- POST /api/auth/register
- POST /api/orders → returns BZ-XXXX ID
- GET /api/orders/:id
- GET /api/stats
- Serves public/ statically
- SPA fallback to index.html

Key mock data: 12 products, 6 categories, 1 demo user, in-memory orders.

See actual file at `/home/user/buyzone/server.js` — 340 lines, already running.

---

## 3️⃣ public/index.html — Frontend UI

Sections:
- Top banner (Flash sale)
- Header: logo BZ, location, search with category select + autocomplete, account/wishlist/cart
- Secondary nav (Today's Deals, etc)
- Hero: Shopping Reimagined + 3 floating product cards + stats
- Categories grid (6 categories)
- Main: Filters sidebar (price range, rating, free shipping, prime promo) + Products toolbar + Grid
- Features bar (Free Shipping, Secure, Returns, Support)
- Footer (Shop, Support, Company, Newsletter)
- Drawers: Cart, Wishlist
- Modals: Product detail (gallery + related), Auth (login/register), Checkout (shipping + payment), Success

Uses: Google Fonts (Outfit + Space Grotesk), Font Awesome 6.5

---

## 4️⃣ public/styles.css — Design System

Variables:
- --bg:#fcfcf9, --primary:#ff5a1f, --secondary:#111113
- --radius:16px, --shadow, --font-display Space Grotesk

Components styled:
- Header with blur backdrop, search box with focus ring
- Hero with blob animation + card stack rotation
- Category cards with hover lift
- Product cards with badge, wishlist heart, image zoom
- Filters sidebar sticky
- Drawer overlay with blur + slide animation
- Modals with modalIn animation
- Auth tabs, checkout layout grid
- Toast container bottom-center
- Responsive: 1100px (tablet), 640px (mobile) breakpoints

---

## 5️⃣ public/app.js — Frontend Logic

State:
```js
state = {
  products: [],
  categories: [],
  cart: localStorage bz_cart,
  wishlist: localStorage bz_wishlist,
  filters: {category, search, sort, minPrice, maxPrice, rating, freeShipping},
  user: localStorage bz_user
}
```

Functions:
- init() → fetch /api/products + /api/categories
- renderCategories(), getFilteredProducts(), renderProducts()
- addToCart(), removeFromCart(), updateQty(), saveCart(), updateCartUI()
- toggleWishlist(), updateWishlistUI()
- openProduct(id) → fetch /api/products/:id → modal with gallery
- openCart(), openWishlist(), closeDrawers(), closeModal()
- openAuth(), handleLogin(), handleRegister()
- openCheckout(), placeOrder() → POST /api/orders
- filterByCategory(), toast()

Event listeners for all inputs, drawers, modals, Escape key.

---

## 🚀 How Hosting Works in Sandbox

1. `node server.js` starts Express on 0.0.0.0:3000
2. Express serves `public/` at `/`
3. API at `/api/*`
4. Arena shows LIVE PREVIEW for port 3000 → https://3000-xxxx.e2b.app
5. That preview URL hosts BOTH frontend and backend — full stack in one sandbox

No external services. No Vercel. No DB. All self-contained.

---

## 🔑 Quick Test

```bash
# Backend
curl http://localhost:3000/api/products | jq
curl http://localhost:3000/api/categories

# Frontend
curl http://localhost:3000/ | head

# Logs
# Process "BuyZone Store" is running
```

---

## 📦 To View Individual Files:

In workspace sidebar:
- Click `buyzone/server.js`
- Click `buyzone/public/index.html`
- Click `buyzone/public/styles.css`
- Click `buyzone/public/app.js`

Or check this file's raw source — all files are at `/home/user/buyzone/`.

---

Built with ❤️ — BuyZone v1.0 — Fully Hosted in Sandbox
