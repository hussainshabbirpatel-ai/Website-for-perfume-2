# Starkperfumes - E-Commerce Platform

A modern, full-featured e-commerce platform for perfume sales with an integrated admin portal.

## Features

### Customer Portal
- Product catalog with search and filtering
- Shopping cart and checkout
- User authentication and profiles
- Order history and tracking
- Product reviews and ratings
- Wishlist functionality

### Admin Portal
- Dashboard with analytics
- Product management
- Order management
- User management
- Inventory tracking
- Sales reports
- Payment processing

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js with Express
- **Database:** PostgreSQL
- **Authentication:** JWT
- **Payment Gateway:** Stripe
- **Hosting:** Docker & AWS

## Project Structure

```
starkperfumes/
├── frontend/              # Customer-facing website
├── admin-portal/          # Admin dashboard
├── backend/               # REST API
├── docker-compose.yml     # Docker configuration
└── README.md
```

## Getting Started

### Quick Start with Docker

```bash
docker-compose up -d
```

Access:
- Frontend: http://localhost:3000
- Admin Portal: http://localhost:3001
- API: http://localhost:5000

### Manual Setup

**Backend:**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

**Admin Portal:**
```bash
cd admin-portal
npm install
npm start
```
