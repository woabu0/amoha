# Amoha - Eye Disease Recognition Application

Welcome to the amoha project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Structure](#structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Vercel](https://amoha0.vercel.app/)

## About

amoha is an AI website to scan eyes that can detect Diabetic Retinopathy, Macular Edema, Age-Related Macular Degeneration, Glaucoma and Cataract.

## Features

- Eye Scan
- Hero
- Disease
- Train
- Contact

## Structure

```
amoha/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   │   └── img/                     # Image files
│   ├── src/
│   │   ├── components/
│   │   │   ├── animations/          # Animation components
│   │   │   ├── icons/               # Icon components
│   │   │   ├── pages/               # Page components
│   │   │   │   ├── Home.jsx         # Landing page
│   │   │   │   ├── LoginPage.jsx    # Login page
│   │   │   │   ├── RegisterPage.jsx # Registration page
│   │   │   │   └── DashboardPage.jsx # User dashboard
│   │   │   ├── sections/            # Section components
│   │   │   │   ├── Hero.jsx         # Hero section
│   │   │   │   ├── About.jsx        # About section
│   │   │   │   ├── Disease.jsx      # Disease information
│   │   │   │   ├── Train.jsx       # Training process
│   │   │   │   ├── Feedback.jsx     # Testimonials
│   │   │   │   ├── Contact.jsx     # Contact form
│   │   │   │   └── Footer.jsx      # Footer
│   │   │   └── ui/                  # UI components
│   │   │       ├── button.jsx
│   │   │       └── card.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Authentication context
│   │   ├── lib/
│   │   │   └── utils.js             # Utility functions
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Global styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                          # Backend Express server
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts          # MongoDB connection
│   │   ├── models/
│   │   │   ├── User.ts              # User model
│   │   │   └── Scan.ts             # Scan model
│   │   ├── middleware/
│   │   │   ├── auth.ts              # Authentication middleware
│   │   │   └── errorHandler.ts     # Error handling
│   │   ├── routes/
│   │   │   ├── auth.ts              # Auth routes (login/register)
│   │   │   └── scan.ts             # Scan routes (upload/history)
│   │   └── index.ts                # Server entry point
│   ├── uploads/                     # Uploaded images directory
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                         # Environment variables
│
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB instance)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory with the following variables:
   ```env
   DB_USERNAME=your_mongodb_username
   DB_PASSWORD=your_mongodb_password
   JWT_SECRET=your_jwt_secret_key
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0
   PORT=5000
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `client` directory (optional):
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The client will run on `http://localhost:5173`

## Usage

1. Start both the backend and frontend servers (see Installation above)
2. Open your browser and navigate to `http://localhost:5173`
3. Register a new account or login with existing credentials
4. Once logged in, you'll be redirected to the dashboard where you can:
   - Upload eye scan images
   - View detection results (Normal, Cataract, Retinopathy, Glaucoma, or Macular)
   - View your scan history

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Scans
- `POST /api/scan/upload` - Upload eye scan image (requires authentication)
- `GET /api/scan/history` - Get user's scan history (requires authentication)

## Contributors

<p align="center">
  <a href="https://github.com/woabu0/amoha/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=woabu0/amoha" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
