# Subscription Tracker API

🌐 Live API: https://subscription-tracker-05tv.onrender.com

A powerful and secure backend application to track and manage all your subscriptions. Built with Node.js and Express, it features automated reminder emails, security integrations, and a robust database structure.

## Features

- **User Authentication**: Secure sign-up and sign-in using **JWT** and **bcrypt**.
- **Subscription Management**: CRUD operations for various subscriptions.
- **Automated Workflows**: Intelligent reminder emails sent via **Upstash Workflow** and **Nodemailer**.
- **Advanced Security**: **Bot protection** and **rate limiting** powered by **Arcjet** that helps you secure the whole app.
- **Global Error Handling**: Robust middleware to handle various application errors gracefully.
- **Database Integration**: Seamless MongoDB integration using **Mongoose** for data persistence.

## Tech Stack

- **Backend**: [Node.js], [Express.js]
- **Database**: [MongoDB] with [Mongoose]
- **Automation**: [Upstash Workflow]
- **Security**: [Arcjet]
- **Utilities**: [jsonwebtoken], [bcryptjs], [Nodemailer], [dayjs]

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```env
# Server Configuration
PORT=5500
NODE_ENV=development
SERVER_URL="http://localhost:5500"

# Database
DB_URI=your_mongodb_uri

# Authentication
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN="1d"

# Security (Arcjet)
ARCJET_KEY=your_arcjet_key
ARCJET_ENV="development"

# Automation (Upstash)
QSTASH_URL=your_qstash_url
QSTASH_TOKEN=your_qstash_token

# Email (Nodemailer)
EMAIL_PASSWORD=your_email_app_password
```

## API Endpoints

### Auth
- `POST /api/v1/auth/sign-up`: Register a new user
- `POST /api/v1/auth/sign-in`: Authenticate a user

### Users
- `GET /api/v1/users`: Get all users (Authorized)
- `GET /api/v1/users/:id`: Get user details (Authorized)

### Subscriptions
- `POST /api/v1/subscriptions`: Create a new subscription
- `GET /api/v1/subscriptions/user/:id`: Get all subscriptions for a specific user
- `GET /api/v1/subscriptions`: Get all subscriptions

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Birendra16/subscription-tracker.git
   cd subscription-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.development.local` file and add the required variables.

4. **Run the application**:
   ```bash
   npm run dev
   ```