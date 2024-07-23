# E-Commerce Platform

Welcome to the **E-Commerce Platform** repository! This project aims to build a fully functional e-commerce website with modern web technologies. It includes features like user authentication, product management, shopping cart, and payment integration, providing a seamless shopping experience.

## Features

### User Authentication
- **JWT Authentication:** Secure user login and registration using JSON Web Tokens.
- **Role-Based Access Control:** Different access levels for admins and customers.

### Product Management
- **Product Listing:** Display of products with details like price, description, and images.
- **Search and Filter:** Advanced search and filtering options for easy product discovery.
- **CRUD Operations:** Admin interface for creating, updating, and deleting products.

### Shopping Cart
- **Add/Remove Items:** Functionality for adding and removing products from the cart.
- **Cart Persistence:** Save the cart state even after the user logs out.

### Payment Integration
- **Stripe Integration:** Secure payment processing using the Stripe API.
- **Order Management:** Track order status from purchase to delivery.

### User Profile
- **Profile Management:** Users can update their personal details and view order history.

### Responsive Design
- **Mobile-Friendly:** Optimized for various devices, ensuring a seamless experience on desktops, tablets, and mobile phones.

## Project Structure

The project is organized into the following main directories:

### Server
The `server` folder contains the backend code for the application. This includes the API, authentication, database interactions, and server configurations.

**Environment Variables:**
env
API_PORT=4000
API_HOST=localhost
MONGO_URL="" // Fill out this
JWT_SECRET="" // Enter random keywords

### CMS
The cms folder houses the admin dashboard part of the application. This is where administrators can manage products, orders, and users.
**Environment Variables:**
env
VITE_API_URL="http://localhost:3000" // URL of the server

### Frontend
The frontend (or front) folder contains the frontend code that end users interact with. This part of the application provides the shopping interface, user authentication, and checkout process.

**Environment Variables:**

VITE_API_URL="http://localhost:3000" // URL of the server
VITE_HOME_URL="http://localhost:7000" // URL of the frontend
