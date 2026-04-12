# MU Eats

A modern food ordering web application built for HKMU students. Order meals from various restaurants on campus and track your orders in real-time on PC, Tablet or Mobile.

## Tech Stack

- **Next.js 16.2** - React framework with server-side rendering
- **React 19.2** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **JWT Decode** - JWT token parsing
- **ESLint** - Code linting

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18+) - Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn/Pnpm** for package management
- **Git** (optional) - For cloning the repository

## Installation

### 1. Clone or Download the Project

```bash
git clone <repository-url>
cd mu-eats
```

Or manually download and extract the project folder.

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

## Running the Application

### Production Server Hosted on Vercel

Visit [https://mueats.vercel.app/](https://mueats.vercel.app/)

- Clicking Sign in or Sign up takes you to home page. Backend Integration still pending.

### Development Server

Start the development server with live reload:

```bash
npm run dev
```

The application will be available at:

- **Local**: http://localhost:3000
- **Network**: http://10.133.221.230:3000 (or your local network IP)
- Clicking Sign in or Sign up takes you to home page. Backend Integration still pending.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

- Clicking Sign in or Sign up takes you to home page. Backend Integration still pending.

## Testing the Application

### Features to Test

1. **Home Page**
   - Navigate to http://localhost:3000/home
   - View available dining options and featured items

2. **Restaurants**
   - Go to `/restaurants` to browse available restaurants
   - Click on a restaurant to view its menu

3. **Products & Shopping Cart**
   - Go to `/products` to view items
   - Click "Add to Cart" on any item
   - Click the shopping cart icon (top right) to open the cart
   - View cart contents with quantities

4. **Place Order**
   - From the shopping cart, click "Place Order"
   - Observe the cart close automatically
   - An active order notification appears at the bottom of the screen (Excluding order status and orders pages)

5. **Active Order**
   - Click "Show" on the order notification to view order status
   - Click "Mark as Complete" to clear the order

6. **Order History**
   - Navigate to `/orders` to view order history
   - Click on any order to see details

### Scenario Highlights

- Add multiple items to cart
- Increase quantity of items
- Remove items from cart
- Place an order and watch the cart close
- View active order notification
- Navigate to order status page
- Complete an order and see notification clear

## 📁 Project Structure

```
mu-eats/
├── app/
│   ├── (root)/                 # Main pages
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── home/
│   │   ├── orders/
│   │   ├── orderStatus/
│   │   ├── products/
│   │   ├── restaurants/
│   │   └── settings/
│   ├── components/             # Reusable components
│   │   ├── ShoppingCart.jsx
│   │   ├── OrderCard.jsx
│   │   ├── ActiveOrder.jsx
│   │   ├── MenuBar.jsx
│   │   └── ...
│   ├── context/                # React Context
│   │   └── CartContext.jsx
│   └── lib/                    # Utilities
│       ├── actions.js
│       └── utils.js
├── public/                     # Images and icons
├── package.json
├── next.config.ts
└── tailwind.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint code checks

## Important Notes!!!

### Front-End Demo

This application is currently a **front-end only demo** and does not make actual API requests to a backend server. Backend Server exists and API functions exist but have not been implemented yet.

### Order Management

- Orders are stored in React Context (in-memory) and will be cleared on page refresh
- Order history is also simulated with demo data
- User information is hardcoded for testing

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is in use, Next.js will automatically use an available port:

```bash
npm run dev
```

Check the terminal output for the actual port being used.

### Dependencies Installation Issues

Clear npm cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Ensure you're using Node.js v18+:

```bash
node --version
npm --version
```

## Responsive Design

The application is theoretically designed to work on:

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (< 768px)

Test the responsive design by resizing your browser, using Chrome DevTools device emulation, or visiting https://mueats.vercel.app/ on your different devices. It is not perfect yet, so do not be surprised if it does not look as aesthetic.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy Testing! 🍽️**
