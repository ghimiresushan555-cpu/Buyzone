# BuyZone - Hosted in Sandbox ✅

## Hosting Status: LIVE

**Server:** Node.js + Express
**Port:** 3000 (bound to 0.0.0.0)
**Process Name:** BuyZone Store
**Process ID:** buyzone-store-549bd73d
**Status:** Running

## What's Hosted Inside Sandbox:

### 1. Backend API (Express)
- Location: /home/user/buyzone/server.js
- Endpoints:
  - GET  /api/products
  - GET  /api/products/:id
  - GET  /api/categories
  - POST /api/auth/login
  - POST /api/auth/register
  - POST /api/orders
  - GET  /api/stats
- All running on http://0.0.0.0:3000

### 2. Frontend (Full Ecommerce UI)
- Location: /home/user/buyzone/public/
- Files: index.html, styles.css, app.js
- Served statically by Express at /
- No external hosting needed - everything in sandbox

### 3. How to Access:

**In this Arena environment:**
- The LIVE PREVIEW button appears next to "BuyZone Store" process
- Click it to open: https://3000-{sandboxId}.e2b.app
- That URL serves BOTH frontend and API

**Local curl test (inside sandbox):**
```bash
curl http://localhost:3000/api/products
curl http://localhost:3000/
```

### 4. Persistence:
- Cart, Wishlist, User stored in browser localStorage
- Orders stored in-memory on server (array)
- Files persist in /home/user/buyzone/

### 5. To Restart:
```bash
cd /home/user/buyzone
node server.js
# or
npm start
```

### 6. Full Stack = All in One Sandbox:
✅ No Vercel
✅ No external DB
✅ No separate frontend hosting
✅ Everything runs in THIS sandbox on port 3000

The preview iframe in Arena will show the full working BuyZone store.
