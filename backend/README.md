# Starkperfumes Backend API

REST API for Starkperfumes e-commerce platform.

## Setup

```bash
cd backend
npm install
```

## Environment Variables

Create `.env` file:

```
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/starkperfumes_db
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_PUBLISHABLE_KEY=your_publishable_key
```

## Running the Server

```bash
npm start          # Production
npm run dev        # Development
```

## API Endpoints

### Public Routes
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Protected Routes
- `GET /api/users/profile` - Get user profile
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders

### Admin Routes
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product
- `GET /api/admin/orders` - Get all orders
- `GET /api/admin/stats` - Dashboard analytics
